import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import { db } from "../../config/firebase";
import { updateDoc, doc } from "firebase/firestore";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const colorsInfo = [
  {
    name: "red",
    code: "#ef4444",
    shade: "#dc2626",
  },
  {
    name: "green",
    code: "#22c55e",
    shade: "#16a34a",
  },
  {
    name: "yellow",
    code: "#eab308",
    shade: "#ca8a04",
  },
  {
    name: "orange",
    code: "#f97316",
    shade: "#ea580c",
  },
  {
    name: "blue",
    code: "#0ea5e9",
    shade: "#0284c7",
  },
  {
    name: "cyan",
    code: "#06b6d4",
    shade: "#0891b2",
  },
  {
    name: "purle",
    code: "#6366f1",
    shade: "#4f46e5",
  },
  {
    name: "gray",
    code: "#1f2937",
    shade: "#000",
  },
];

const Form3 = ({ setStepCounter, setDetails, details }) => {
  const [themeColor, setThemeColor] = useState("#ef4444");

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
          {colorsInfo.map((c) => (
            <div
              style={{ backgroundColor: c.code, borderColor: "#fff" }}
              onClick={(e) => handleThemeColor(e.target.ariaLabel)}
              aria-label={c.code}
              className={`cursor-pointer text-white capitalize h-32 w-20 rounded-md flex items-center justify-center ${
                themeColor === c.code && "border-[2px] border-dashed"
              }`}
            >
              {c.name}
            </div>
          ))}
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
