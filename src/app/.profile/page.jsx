/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import AnimatedWrapper from "./AnimatedWrapper";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useCurrentPage, useUserStore, useTheme } from "@/store";
import ProfileBackgroundImage from "@/components/ProfileBackgroundImage";
import ProfileAvatar from "@/components/ProfileAvatar";
import { Settings2 } from "lucide-react";
import ProfileBottomBar from "@/components/ProfileBottomBar";
import CourseCard from "@/components/CourseCard";
import ChangeReminder from "@/components/ChangeReminder";
import { light_theme, dark_theme } from "@/themes";
// export const metadata = {
//   // works because you have static routes
//   title: "Contacts - OneFluency",
// };

const ContactsScreen = ({ params }) => {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { theme, setTheme } = useTheme();
  const { userBackgroundPicture, userProfilePicture, userName } =
    useUserStore();

  useEffect(() => {
    setCurrentPage("profile");
  }, [currentPage]);

  // === LOADING SAVED THEME ===
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

  // ==== ==== ====

  return (
    <Box
      w="100vw"
      h="100vh"
      overflowX="hidden"
      display="relative"
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
          m="auto"
        >
          <ChangeReminder
            status="error"
            title="Данная секция находится под разработкой!"
          />
          <Box
            mt={2}
            w="full"
            h="auto"
            p={0}
            boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
            rounded="md"
            position="relative"
          >
            <ProfileBackgroundImage src={userBackgroundPicture} />
            <ProfileAvatar src={userProfilePicture} />

            <Box
              w="full"
              h="120px"
              roundedEndStart="md"
              roundedEndEnd="md"
              position="relative"
              bgColor={theme.profileCardBox}
            >
              <Button variant="plain" pos="absolute" right={0} mt={1}>
                <Settings2 color={theme.textColor} size={32} />
              </Button>
              <Box position="absolute" bottom="15px" left="25px">
                <Text color={theme.textColor} fontWeight={700}>
                  {userName}
                </Text>
                <Text color={theme.subtleText} fontWeight={500}>
                  Личный кабинет
                </Text>
              </Box>
            </Box>
          </Box>

          <Box
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            w="full"
            // boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
            mt={4}
          >
            <Box w="full" display="flex" justifyContent="flex-start">
              <Text
                ml={0.5}
                color={theme.textColor}
                fontWeight={700}
                fontSize={16}
              >
                Мои курсы
              </Text>
            </Box>
            <Box mt={3} w="full" h="auto">
              {/* The container for course cards */}
              {/* <CourseCard /> */}
              <Image m="auto" w="full" rounded="lg" src="EmptyCourses.png" />
            </Box>
          </Box>
        </Box>
      </AnimatedWrapper>

      <ProfileBottomBar theme={theme} />
    </Box>
  );
};

export default ContactsScreen;
