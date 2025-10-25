"use client";
import LanguageSection from "../components/LanguageSection";
import TabsSection from "../components/TabsSection";
import { useState } from "react";
import ItSection from "../components/ItSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const [currentCountry, setCurrentCountry] = useState(1);

  const languageHandler = () => {
    setActiveTab(() => 1);
  };

  const itHandler = () => {
    setActiveTab(() => 2);
  };

  const onClickHandle = (value) => {
    setCurrentCountry(value);
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      overflowY="auto"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgColor="white"
    >
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0, x: -700 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{
            height: "100%",
          }}
        >
          <Navbar
            currentCountry={currentCountry}
            onClickHandle={onClickHandle}
          />
          <Box
            display="block"
            w={{ base: "100vw", md: "500px", lg: "600px" }}
            minH="100vh"
            p={4}
          >
            <TabsSection
              mb={0}
              activeTab={activeTab}
              languageHandler={languageHandler}
              itHandler={itHandler}
            />
            {activeTab == 1 ? (
              <LanguageSection currentCountry={currentCountry} />
            ) : (
              <ItSection currentCountry={currentCountry} />
            )}
            <Footer />
          </Box>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
}
