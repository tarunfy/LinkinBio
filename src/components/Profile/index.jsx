import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { Avatar, Button } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

const Profile = () => {
  const { logout, user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex items-start space-x-10">
        <Avatar src={user.photoURL} size="2xl" />
        <div>
          <div className="flex items-center justify-start space-x-8">
            <h1 className="text-3xl font-semibold">
              {user.details.profile.name}
            </h1>
            <div className="space-x-2">
              <Button size="sm" variant="outline" colorScheme="cyan">
                Edit profile
              </Button>
              <Button
                onClick={logout}
                size="sm"
                variant="solid"
                colorScheme="red"
              >
                Logout
              </Button>
            </div>
          </div>
          <div className="my-10">
            <div className="flex items-center space-x-3">
              <a
                href={`https://www.youtube.com/c/${user.details.socials.youtube}`}
                className="flex items-center space-x-2 border shadow-sm hover:shadow-md  py-1 px-2 rounded"
              >
                <p>Youtube</p>
                <AiOutlineYoutube />
              </a>

              <a
                href={`https://www.twitter.com/${user.details.socials.twitter}`}
                className="flex items-center space-x-2 border shadow-sm hover:shadow-md py-1 px-2 rounded"
              >
                <p>Twitter</p>
                <AiOutlineTwitter />
              </a>

              <a
                href={`https://www.instagram.com/${user.details.socials.insta}`}
                className="flex items-center space-x-2 border shadow-sm hover:shadow-md py-1 px-2 rounded"
              >
                <p>Instagram</p>
                <AiOutlineInstagram />
              </a>

              <a
                href={`https://www.tiktok.com/@${user.details.socials.tiktok}`}
                className="flex items-center space-x-2 border shadow-sm hover:shadow-md py-1 px-2 rounded"
              >
                <p>Tiktok</p>
                <FaTiktok />
              </a>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold">{user.displayName}</h1>
            <p className="text-lg font-semibold">{user.details.profile.bio}</p>
            <a
              href="http://"
              className="text-semibold text-blue-600 text-lg hover:underline"
            >
              {user.details.link}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
