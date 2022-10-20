import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

const Form3 = ({ setStepCounter, setDetails }) => {
  const nameRef = useRef(null);
  const bioRef = useRef(null);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!nameRef.current.value || !bioRef.current.value) {
      setError("Please add all information");
      return;
    }
    setStepCounter((prev) => prev + 1);
    setDetails((s) => ({
      ...s,
      profile: {
        name: nameRef.current.value,
        bio: bioRef.current.value,
      },
    }));
  };
  return (
    <div className="h-screen bg-slate-50 flex items-center justify-center">
      <form className="p-10 space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Create Your Profile</h1>
          <p className="text-md max-w-md text-gray-500">
            Please fill in the required details to complete your profile. This
            can be edited later.
          </p>
        </div>
        <div className="flex items-start space-y-1 flex-col">
          <label htmlFor="name" className="text-base font-bold">
            Profile name
          </label>
          <input
            ref={nameRef}
            type="text"
            id="name"
            className="w-full placeholder:text-lg text-lg p-2 rounded-md border"
          />
        </div>
        <div className="flex items-start space-y-1 flex-col">
          <label htmlFor="bio" className="text-base font-bold">
            Profile bio
          </label>
          <textarea
            ref={bioRef}
            type="text"
            id="bio"
            className="w-full placeholder:text-lg text-lg p-2 rounded-md border"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-gradient-to-r w-full from-blue-500 via-cyan-500 to-cyan-400 text-white px-4 py-2 rounded-md shadow-md flex items-center text-lg hover:shadow-lg transition justify-center"
        >
          Next <ArrowForwardIcon className="!ml-2" />
        </button>
        {error && (
          <p className="text-red-500 text-center text-sm mt-3">{error}</p>
        )}
        <Button onClick={() => setStepCounter((prev) => prev - 1)}>Back</Button>
      </form>
    </div>
  );
};

export default Form3;
