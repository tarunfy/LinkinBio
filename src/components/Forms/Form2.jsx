import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { useRef, useState } from "react";

const Form2 = ({ setStepCounter, setDetails }) => {
  const instaRef = useRef(null);
  const twitterRef = useRef(null);
  const tiktokRef = useRef(null);
  const youtubeRef = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (
      !instaRef.current.value ||
      !twitterRef.current.value ||
      !tiktokRef.current.value ||
      !youtubeRef.current.value
    ) {
      setError("Please add all social handles");
      return;
    }
    setStepCounter((prev) => prev + 1);
    setDetails((s) => ({
      ...s,
      socials: {
        insta: instaRef.current.value,
        twitter: twitterRef.current.value,
        tiktok: tiktokRef.current.value,
        youtube: youtubeRef.current.value,
      },
    }));
  };

  return (
    <div className="h-screen bg-slate-50 flex items-center justify-center">
      <form className="p-10 space-y-5">
        <div className="space-y-2">
          <h1 className="text-4xl font-medium">Add Your Socials</h1>
          <p className="text-md text-gray-500 max-w-xl">
            Add your socials media usernames. We will use these details to start
            building your page for you.
          </p>
        </div>
        <div className="flex items-start space-y-1 flex-col">
          <label htmlFor="insta" className="text-base font-bold">
            Instagram
          </label>
          <input
            ref={instaRef}
            type="text"
            id="insta"
            className="w-full placeholder:text-lg text-lg p-2 rounded-md border"
          />
        </div>
        <div className="flex items-start space-y-1 flex-col">
          <label htmlFor="twitter" className="text-base font-bold">
            Twitter
          </label>
          <input
            ref={twitterRef}
            type="text"
            id="twitter"
            className="w-full placeholder:text-lg text-lg p-2 rounded-md border"
          />
        </div>
        <div className="flex items-start space-y-1 flex-col">
          <label htmlFor="tiktok" className="text-base font-bold">
            Tiktok
          </label>
          <input
            ref={tiktokRef}
            type="text"
            id="tiktok"
            className="w-full placeholder:text-lg text-lg p-2 rounded-md border"
          />
        </div>
        <div className="flex items-start space-y-1 flex-col">
          <label htmlFor="youtube" className="text-base font-bold">
            Youtube
          </label>
          <input
            ref={youtubeRef}
            type="text"
            id="youtube"
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

export default Form2;
