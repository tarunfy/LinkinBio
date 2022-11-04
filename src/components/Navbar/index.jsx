import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { gooleAuthentication } = useContext(AuthContext);

  return (
    <div className="absolute top-0 left-0 px-32 py-5 flex items-center justify-between w-full">
      <h1 className="text-3xl text-gray-700 tracking-tighter font-semibold">
        Supabio
      </h1>
      <Button
        onClick={gooleAuthentication}
        colorScheme="blue"
        variant="outline"
      >
        Log in
      </Button>
    </div>
  );
};

export default Navbar;
