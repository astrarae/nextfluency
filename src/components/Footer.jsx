import { Box, Text } from "@chakra-ui/react";

const Footer = ({ ...otherProps }) => {
  return (
    <Box
      {...otherProps}
      w="full"
      h="10px"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      mt="40px"
      p={0}
    >
      <Text color="black" fontSize="0.7rem">
        Made by the author of these courses.{" "}
      </Text>
      <Text color="black" fontSize="0.6rem">
        For any inquiries regarding website creation, contact the contacts
        included.{" "}
      </Text>
    </Box>
  );
};

export default Footer;
