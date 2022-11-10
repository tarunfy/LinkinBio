import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";

const Social = ({ socials }) => {
  return (
    <>
      <a
        href={socials.youtube}
        className="flex bg-white text-black items-center space-x-2 border shadow-sm hover:shadow-md  py-1 px-2 rounded"
        target="_blank"
      >
        <p>Youtube</p>
        <AiOutlineYoutube />
      </a>

      <a
        href={socials.twitter}
        className="flex bg-white text-black items-center space-x-2 border shadow-sm hover:shadow-md py-1 px-2 rounded"
        target="_blank"
      >
        <p>Twitter</p>
        <AiOutlineTwitter />
      </a>

      <a
        href={socials.insta}
        className="flex bg-white text-black items-center space-x-2 border shadow-sm hover:shadow-md py-1 px-2 rounded"
        target="_blank"
      >
        <p>Instagram</p>
        <AiOutlineInstagram />
      </a>

      <a
        href={socials.tiktok}
        className="flex bg-white text-black items-center space-x-2 border shadow-sm hover:shadow-md py-1 px-2 rounded"
        target="_blank"
      >
        <p>Tiktok</p>
        <FaTiktok />
      </a>
    </>
  );
};

export default Social;
