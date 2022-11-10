import { Avatar, Button } from "@chakra-ui/react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";
import Social from "../Cards/Social";

const Profile = () => {
  const { logout, user } = useContext(AuthContext);
  return (
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
            <Social socials={user.details.socials} />
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
  );
};

export default Profile;
