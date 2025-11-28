/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Text, Button } from "@chakra-ui/react";
import CountryChoice from "./CountryChoice";
import { Menu } from "lucide-react";
import NavDrawer from "./Drawer";
import { useCountryStore, useTheme } from "@/store";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = ({
  showThemeSwitcher = false,
  showButton = false,
  ...otherProps
}) => {
  const { theme } = useTheme();
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
      p={4}
      w="100%"
      h="55px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top={0}
      left={0}
      zIndex={10}
      bg={theme.navbarBg} // semi-transparent white
      backdropFilter="blur(7px)"
    >
      <Box display="flex" flexDir="row" alignItems="center" p={1} gap={2}>
        {/* <NavDrawer>
          icon={
            <Menu
            color={theme.textColor}
            style={{ position: "relative", top: 0, right: 12 }}
          />
          }
        </NavDrawer> */}
        <AnimatePresence>
          {showButton && (
            <motion.div
              initial={{ transform: "scale(0.1)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0.1)" }}
              transition={0.8}
            >
              <Link href="/">
                <Button
                  rounded="3xl"
                  color="white"
                  bgColor={theme.priceBoxAccent}
                  // backdropFilter="blur(2px)"
                >
                  Меню
                </Button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showThemeSwitcher && (
            <motion.div
              initial={{ transform: "scale(0.1)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0.1)" }}
              transition={0.8}
            >
              <ThemeSwitcher mt={0}/>
            </motion.div>
          )}
        </AnimatePresence>

        <Text
          mb={1}
          color={theme.textColor}
          fontWeight={700}
          fontSize="17px"
          display={{ base: "none", lg: "flex" }}
        >
          OneFluency
        </Text>
      </Box>

      <Box display="flex" flexDir="row" alignItems="center" gap={2}>
        <Text color={theme.textColor} fontWeight={700} fontSize="15px">
          Ваша страна:{" "}
        </Text>
        <CountryChoice
          theme={theme}
          currentCountry={currentCountry}
          onClickHandle={onClickHandle}
        />
      </Box>
    </Box>
  );
};

export default Navbar;
