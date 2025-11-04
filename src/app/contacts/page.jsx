"use client"
import { Box } from "@chakra-ui/react";
import ProfileCard from "../../components/ProfileCard";
import Footer from "../../components/Footer";
import CertificateCard from "../../components/CertificateCard";
import ContactCard from "../../components/ContactCard";
import BankCard from "../../components/BankCard";
import AnimatedWrapper from "./AnimatedWrapper";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useCurrentPage, useTheme } from "@/store";
// export const metadata = {
//   // works because you have static routes
//   title: "Contacts - OneFluency",
// };

const ContactsScreen = ({ params }) => {
  const { currentPage,setCurrentPage } = useCurrentPage();
  const { theme } = useTheme();
  
    useEffect(() => {
      setCurrentPage("contacts")
    }, [currentPage])

  return (
    <Box
      w="100vw"
      h="100vh"
      overflowX="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgColor={theme.bgColor}
    >
      <Navbar />
      <AnimatedWrapper>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          w={{ base: "100vw", md: "500px", lg: "600px" }}
          minH="100vh"
          overflowX="hidden"
          p={4}
          mt={6}
        >
          <ProfileCard
            theme={theme}
            avatarImage="avatarr.jpg"
            backgroundImage="https://images.pexels.com/photos/1824273/pexels-photo-1824273.jpeg"
          >
            <CertificateCard
              theme={theme}
              title="IELTS Certificate"
              link="https://photos.app.goo.gl/R3Ur63Xrd7Vm5xnP6"
            />
            <CertificateCard
              theme={theme}
              title="TOPIK Certificate"
              link="https://photos.app.goo.gl/1uaFz2nF8dfxrKVR6"
            />
          </ProfileCard>

          <Box
            w="full"
            marginTop={4}
            display="flex"
            flexDirection="column"
            gap={4}
            mb={8}
          >
            <ContactCard
              title="Telegram"
              avatar="https://cdn.pixabay.com/photo/2021/12/27/10/50/telegram-6896827_1280.png"
              link="https://t.me/v4LeR4ik"
            />
            <ContactCard
              title="Facebook"
              avatar="facebook.png"
              link="https://www.facebook.com/profile.php?id=61554697711034"
            />
            <ContactCard
              title="Discord"
              avatar="discord.jpg"
              link="https://discord.gg/P5Keaq9N"
            />
          </Box>
          <Footer />
        </Box>
      </AnimatedWrapper>
    </Box>
  );
};

export default ContactsScreen;
