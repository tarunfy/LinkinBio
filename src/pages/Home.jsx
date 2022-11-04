import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  const { gooleAuthentication } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="w-full h-screen flex items-center justify-center flex-col">
        <div className="text-center space-y-4">
          <h1 className="text-8xl text-gray-800 font-bold max-w-5xl">
            Make your profile
            <span className="bg-clip-text block text-transparent bg-gradient-to-r from-blue-500 via-cyan-500 to-cyan-400">
              wonderful
            </span>
          </h1>
          <p className="text-lg text-gray-600 w-full">
            Use Supabio to create a fully-customizable link in bio web page.
            Drive traffic from Instagram <br /> & TikTok, track clicks, and
            more.
          </p>
          <button
            onClick={gooleAuthentication}
            className="text-xl disabled:bg-primary/50  font-medium hover:scale-95 transition duration-200 !mt-8 px-4 py-2 bg-primary text-white"
          >
            Try for free <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
