import { Center, Spinner } from "@chakra-ui/react";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../config/firebase";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
