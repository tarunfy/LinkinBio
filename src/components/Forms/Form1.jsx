import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Form1 = ({ setStepCounter, setDetails }) => {
  const linkRef = useRef(null);
  const [error, setError] = useState("");

  const { fetchCurrentUserDetails } = useContext(AuthContext);

  useEffect(() => {
    async function getDetails() {
      await fetchCurrentUserDetails();
    }
    getDetails();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!linkRef.current.value) {
      setError("Please enter a link");
      return;
    }
    setStepCounter((prev) => prev + 1);
    setDetails((s) => ({ ...s, link: linkRef.current.value }));
  };

  return (
    <div className="h-screen bg-slate-50 flex items-center justify-center">
      <form className="p-10 space-y-5">
        <div className="space-y-2">
          <h1 className="text-[2.5rem] font-medium">Choose Your Unique Link</h1>
          <p className="text-md text-gray-500">
            Choose a unique link for your page. This can be edited later.
          </p>
        </div>
        <div className="flex items-start space-y-1 flex-col">
          <label htmlFor="link" className="text-base font-bold">
            Your link
          </label>
          <input
            ref={linkRef}
            required
            type="text"
            id="link"
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
      </form>
    </div>
  );
};

export default Form1;
