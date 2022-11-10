import { Box, Heading, Text } from "@chakra-ui/react";

const LinkCard = ({ info }) => {
  return (
    <div>
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        backgroundColor="white"
        textColor="black"
        borderRadius={4}
      >
        <Heading fontSize="xl">{info.title}</Heading>
        <Text mt={4}>{info.description}</Text>
        <a
          href={info.link}
          target="_blank"
          className="text-blue-600 font-medium"
        >
          {info.link}
        </a>
      </Box>
    </div>
  );
};

export default LinkCard;
