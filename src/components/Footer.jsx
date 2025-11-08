import { Box, Text } from "@chakra-ui/react";
import { useTheme } from "@/store";
const Footer = ({ ...otherProps }) => {
  const { theme } = useTheme();
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
      <Text color={theme.textColor} fontSize="0.7rem">
        Made by the author of these courses.{" "}
      </Text>
      <Text color={theme.textColor} fontSize="0.6rem">
        For any inquiries regarding website creation, contact the contacts
        included.{" "}
      </Text>
    </Box>
  );
};

export default Footer;
