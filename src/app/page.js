"use client";
import MainPageAnimationWrapper from "../functions/MainPageAnimationWrapper";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCountryReminder, useTheme } from "@/store";
import { Box } from "@chakra-ui/react";
import ChangeReminder from "@/components/ChangeReminder";
import { AnimatePresence } from "framer-motion";
import { light_theme, dark_theme } from "@/themes";
import { useEffect } from "react";

import "./page.css";
export default function Home() {
  const { confirmed } = useCountryReminder();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("userTheme");
    if (savedTheme === "dark") {
      setTheme(dark_theme);
    } else if (savedTheme === "light") {
      setTheme(light_theme);
    } else {
      setTheme(light_theme);
    }
  }, []);
  return (
    <Box
      w="100vw"
      h="auto"
      display="relative"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgColor={theme.bgColor}
    >
      <Navbar />
      <MainPageAnimationWrapper>
        <Box
          w={{ base: "100vw", md: "500px", lg: "600px" }}
          minH="100vh"
          p={4}
          
        >
          <AnimatePresence>
            {!confirmed && (
              <ChangeReminder
                title="Не забудьте выбрать страну, чтобы увидеть актуальную информацию"
                status="info"
              />
            )}
          </AnimatePresence>

          <MainSection theme={theme} />
        </Box>
        <Footer />
      </MainPageAnimationWrapper>
    </Box>
  );
}
