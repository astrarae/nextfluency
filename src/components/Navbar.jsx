/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text, Image } from "@chakra-ui/react";
import CountryChoice from "./CountryChoice";
import { Menu } from "lucide-react";
import NavDrawer from "./Drawer";
import { useCountryStore } from "@/store";
import { useEffect } from "react";

const Navbar = ({ ...otherProps }) => {
  const { currentCountry, setCurrentCountry } = useCountryStore();
  const onClickHandle = (value) => {
    setCurrentCountry(value);
    localStorage.setItem("selectedCountry", value);
  };
  useEffect(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry) {
      setCurrentCountry(Number(savedCountry));
    }
  }, []);
  return (
    <Box
      {...otherProps}
      pt={2}
      pl={4}
      pr={4}
      w="100%"
      h="auto"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top={0}
      left={0}
      zIndex={10}
      bg="rgba(255, 255, 255, 0.3)" // semi-transparent white
      backdropFilter="blur(7px)"
    >
      <Box display="flex" flexDir="row" alignItems="center" p={1} gap={2}>
        <NavDrawer>
          <Menu
            color="black"
            style={{ position: "relative", top: 0, right: 12 }}
          />
        </NavDrawer>
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

      <Box display="flex" flexDir="row" alignItems="center" gap={2}>
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
