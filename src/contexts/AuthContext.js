import { Center, Spinner } from "@chakra-ui/react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getDoc,
  setDoc,
  doc,
  collection,
  getDocs,
  query,
  orderBy,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";
import { v4 as uuidv4 } from "uuid";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [userLinks, setUserLinks] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setIsLoading(true);
      if (user) {
        const ref = doc(db, "users", user.uid);
        const docSnap = await getDoc(ref);
        if (!docSnap.exists()) {
          await setDoc(ref, {
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            uid: user.uid,
            details: null,
          });
        }
        setUser({
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid,
        });
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
  }, []);

  const gooleAuthentication = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const logout = async () => {
    await auth.signOut();
  };

  const fetchCurrentUserDetails = async () => {
    const docRef = doc(db, "users", user.uid);
    const res = await getDoc(docRef);
    setUser(res.data());
  };

  const addLink = async (title, link, description) => {
    setIsLoading(true);

    try {
      const ref = doc(db, `users/${user.uid}`, "Links", uuidv4());

      await setDoc(ref, {
        title,
        link,
        description,
        createdAt: new Date(),
      });
    } catch (err) {
      console.log(err.message);
    }

    setIsLoading(false);
  };

  const fetchCurrentUserLinks = async () => {
    try {
      let mylinks = [];
      const ref = collection(db, `users/${user.uid}`, "Links");
      const q = query(ref, orderBy("createdAt"));
      const links = await getDocs(q);

      links.docs.forEach((link) => {
        mylinks.push({ ...link.data(), id: link.id });
      });

      setUserLinks(mylinks);
    } catch (err) {
      console.log(err.message);
    }
  };

  if (isLoading) {
    return (
      <Center h="100vh" w="100vw">
        <Spinner size="xl" />
      </Center>
    );
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        gooleAuthentication,
        fetchCurrentUserDetails,
        error,
        logout,
        setUser,
        setIsLoading,
        addLink,
        fetchCurrentUserLinks,
        userLinks,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
