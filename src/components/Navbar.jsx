import { Box, Text, Image } from "@chakra-ui/react";
import CountryChoice from "./CountryChoice";

const Navbar = ({ onClickHandle, currentCountry, ...otherProps }) => {
  return (
    <Box
      {...otherProps}
      w="full"
      h="20px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" flexDir="row" alignItems="center" gap={2}>
        <Image h={10} w={10} src="infinite-logo.svg" />
        <Text
          mb={1}
          color="black"
          fontWeight={700}
          fontSize="17px"
          display={{ base: "none", lg: "flex" }}
        >
          OneFluency
        </Text>
      </Box>

      <Box mb={1} display="flex" flexDir="row" alignItems="center" gap={2}>
        <Text color="black" fontWeight={700} fontSize="15px">
          Ваша страна:{" "}
        </Text>
        <CountryChoice
          currentCountry={currentCountry}
          onClickHandle={onClickHandle}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
