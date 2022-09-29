import { Box, Button, Heading } from "@chakra-ui/react";

const containerStyles = {
  color: "gray.800",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid gray",
};

const Navbar = () => {
  return (
    <Box w="100%" py="1.5rem" px="6rem" style={containerStyles}>
      <Heading as="h1" size="lg">
        LinkInBio
      </Heading>
      <Button colorScheme="telegram" variant="outline">
        Login
      </Button>
    </Box>
  );
};

export default Navbar;
