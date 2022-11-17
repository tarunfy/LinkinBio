import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  increment,
  doc,
} from "firebase/firestore";
import { Avatar } from "@chakra-ui/react";
import Social from "../components/Cards/Social";
import LinkCard from "../components/Cards/LinkCard";

const View = () => {
  const { username } = useParams();
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    async function getUserData() {
      //getting basic user details:
      const ref = collection(db, "users");
      const q = query(ref, where("details.profile.name", "==", username));
      const res = await getDocs(q);

      if (res.docs.length === 0) {
        console.log("No user found");
        return;
      }

      const userData = res.docs[0].data();
      const colRef = collection(db, "users", userData.uid, "Links");
      const userLinks = await getDocs(colRef);

      let links = [];
      if (!userLinks.empty) {
        userLinks.docs.forEach((doc) => {
          links.push(doc.data());
        });
      }

      setUserInfo({ ...userData, links });
    }

    getUserData();
  }, []);

  useEffect(() => {
    (async () => {
      if (userInfo?.uid) {
        const docRef = doc(db, "users", userInfo.uid);
        await updateDoc(docRef, {
          viewCount: increment(1),
        });
      }
    })();
  }, [userInfo]);

  if (!userInfo) return <div></div>;

  return (
    <div
      style={{ backgroundColor: userInfo?.details.themeColor }}
      className="flex flex-col justify-start items-center text-white/90 min-h-screen space-y-10"
    >
      <div className="flex flex-col justify-center items-center mt-20 space-y-5">
        {userInfo && (
          <Avatar size="xl" src={userInfo?.photoURL} alt="profile photo" />
        )}
        <h2 className="text-2xl font-bold text-white">
          {userInfo?.details.profile.name}
        </h2>
        <p className="max-w-lg text-center">{userInfo?.details.profile.bio}</p>
      </div>
      {userInfo && (
        <div className="flex items-center justify-between space-x-4 mb-10">
          <Social socials={userInfo?.details?.socials} />
        </div>
      )}
      <div className="grid grid-cols-3 gap-5 max-w-5xl">
        {userInfo?.links.length > 0 &&
          userInfo?.links.map((l, i) => <LinkCard key={i} info={l} />)}
      </div>
    </div>
  );
};

export default View;
