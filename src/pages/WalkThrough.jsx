import { useContext, useEffect, useState } from "react";

import Form1 from "../components/Forms/Form1";
import Form2 from "../components/Forms/Form2";
import Form3 from "../components/Forms/Form3";
import { AuthContext } from "../contexts/AuthContext";

const WalkThrough = () => {
  const [stepCounter, setStepCounter] = useState(1);
  const [details, setDetails] = useState({
    socials: {
      insta: "",
      twitter: "",
      tiktok: "",
      youtube: "",
    },
    profile: {
      bio: "",
      name: "",
    },
    themeColor: "",
  });

  const { fetchCurrentUserDetails } = useContext(AuthContext);

  useEffect(() => {
    async function getDetails() {
      await fetchCurrentUserDetails();
    }
    getDetails();
  }, []);

  return (
    <>
      {stepCounter === 1 ? (
        <Form1 setDetails={setDetails} setStepCounter={setStepCounter} />
      ) : stepCounter === 2 ? (
        <Form2 setDetails={setDetails} setStepCounter={setStepCounter} />
      ) : stepCounter === 3 ? (
        <Form3
          details={details}
          setDetails={setDetails}
          setStepCounter={setStepCounter}
          stepCounter={stepCounter}
        />
      ) : (
        <h1>{stepCounter}</h1>
      )}
    </>
  );
};

export default WalkThrough;
