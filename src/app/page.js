"use client";
import MainPageAnimationWrapper from "../functions/MainPageAnimationWrapper";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTabStore, useCountryReminder } from "@/store";
import { Box } from "@chakra-ui/react";
import ChangeReminder from "@/components/ChangeReminder";
import { AnimatePresence } from "framer-motion";
import "./page.css";

export default function Home() {
  const { activeTab } = useTabStore();
  const { confirmed } = useCountryReminder();

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
      <Navbar />
      <MainPageAnimationWrapper>
        <Box
          w={{ base: "100vw", md: "500px", lg: "600px" }}
          minH="100vh"
          p={4}
          mt={4}
        >
          <AnimatePresence>{!confirmed && <ChangeReminder />}</AnimatePresence>

          <MainSection />
        </Box>
        <Footer />
      </MainPageAnimationWrapper>
    </Box>
  );
}
