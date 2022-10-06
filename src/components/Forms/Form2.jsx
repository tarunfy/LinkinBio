import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

const Form2 = ({ stepCounter, setStepCounter }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setStepCounter((prev) => prev + 1);
    console.log("Counter", stepCounter);
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
        <Button onClick={() => setStepCounter((prev) => prev - 1)}>Back</Button>
      </form>
    </div>
  );
};

export default Form2;
