import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { db } from "../../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Form3 = ({ setStepCounter, setDetails, details }) => {
  const [themeColor, setThemeColor] = useState("red");

  const { user, setUser, fetchCurrentUserDetails } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const docRef = doc(db, "users", user.uid);
    await updateDoc(docRef, {
      details,
    });
    setUser((u) => ({ ...u, details }));
    await fetchCurrentUserDetails();
    navigate("/dashboard");
  };

  const handleThemeColor = (color) => {
    const myColor = color;
    setThemeColor(myColor);
  };

  useEffect(() => {
    setDetails((s) => ({ ...s, themeColor }));
  }, [themeColor]);
  return (
    <div className="h-screen bg-slate-50 flex items-center justify-center">
      <form className="p-10 space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Choose Your Theme</h1>
          <p className="text-md text-gray-500">
            Select a theme for your page. This can be edited later.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <div
            onClick={(e) => handleThemeColor(e.target.ariaLabel)}
            aria-label="red"
            className={`bg-red-500 cursor-pointer h-32 w-20 rounded-md flex items-center justify-center ${
              themeColor === "red" && "border-[5px] border-red-600"
            }`}
          >
            <p className="text-white font-bold">Red</p>
          </div>

          <div
            onClick={(e) => handleThemeColor(e.target.ariaLabel)}
            aria-label="green"
            className={`bg-green-500 cursor-pointer h-32 w-20 rounded-md flex items-center justify-center ${
              themeColor === "green" && "border-[5px] border-green-600"
            }`}
          >
            <p className="text-white font-bold">Green</p>
          </div>
          <div
            onClick={(e) => handleThemeColor(e.target.ariaLabel)}
            aria-label="yellow"
            className={`bg-yellow-500 cursor-pointer h-32 w-20 rounded-md flex items-center justify-center ${
              themeColor === "yellow" && "border-[5px] border-yellow-600"
            }`}
          >
            <p className="text-white font-bold">Yellow</p>
          </div>
          <div
            onClick={(e) => handleThemeColor(e.target.ariaLabel)}
            aria-label="blue"
            className={`bg-blue-500 cursor-pointer h-32 w-20 rounded-md flex items-center justify-center ${
              themeColor === "blue" && "border-[5px] border-blue-600"
            }`}
          >
            <p className="text-white font-bold">Blue</p>
          </div>
          <div
            onClick={(e) => handleThemeColor(e.target.ariaLabel)}
            aria-label="cyan"
            className={`bg-cyan-500 cursor-pointer h-32 w-20 rounded-md flex items-center justify-center ${
              themeColor === "cyan" && "border-[5px] border-cyan-600"
            }`}
          >
            <p className="text-white font-bold">Cyan</p>
          </div>
          <div
            onClick={(e) => handleThemeColor(e.target.ariaLabel)}
            aria-label="purple"
            className={`bg-purple-500 cursor-pointer h-32 w-20 rounded-md flex items-center justify-center ${
              themeColor === "purple" && "border-[5px] border-purple-600"
            }`}
          >
            <p className="text-white font-bold">Purple</p>
          </div>
          <div
            onClick={(e) => handleThemeColor(e.target.ariaLabel)}
            aria-label="pink"
            className={`bg-pink-500 cursor-pointer h-32 w-20 rounded-md flex items-center justify-center ${
              themeColor === "pink" && "border-[5px] border-pink-600"
            }`}
          >
            <p className="text-white font-bold">Pink</p>
          </div>
          <div
            onClick={(e) => handleThemeColor(e.target.ariaLabel)}
            aria-label="gray"
            className={`bg-gray-800 cursor-pointer h-32 w-20 rounded-md flex items-center justify-center ${
              themeColor === "gray" && "border-[5px] border-black"
            }`}
          >
            <p className="text-white font-bold">Dark</p>
          </div>
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-gradient-to-r w-full from-blue-500 via-cyan-500 to-cyan-400 text-white px-4 py-2 rounded-md shadow-md flex items-center text-lg hover:shadow-lg transition justify-center"
        >
          Next <ArrowForwardIcon className="!ml-2" />
        </button>
        <Button onClick={() => setStepCounter((prev) => prev - 1)}>Back</Button>
      </form>
    </div>
  );
};

export default Form3;
