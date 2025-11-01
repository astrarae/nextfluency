/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import AnimatedWrapper from "./AnimatedWrapper";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useCurrentPage, useUserStore } from "@/store";
import ProfileBackgroundImage from "@/components/ProfileBackgroundImage";
import ProfileAvatar from "@/components/ProfileAvatar";
import { Settings2 } from "lucide-react";
import ProfileBottomBar from "@/components/ProfileBottomBar";
import CourseCard from "@/components/CourseCard";
import ChangeReminder from "@/components/ChangeReminder";
// export const metadata = {
//   // works because you have static routes
//   title: "Contacts - OneFluency",
// };

const ContactsScreen = ({ params }) => {
  const { currentPage, setCurrentPage } = useCurrentPage();
  const { userBackgroundPicture, userProfilePicture, userName } =
    useUserStore();

  useEffect(() => {
    setCurrentPage("profile");
  }, [currentPage]);

  return (
    <Box
      w="100vw"
      h="100vh"
      overflowX="hidden"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgColor="white"
    >
      <Navbar />
      <AnimatedWrapper>
        <Box
          display="flex"
          flexDir="column"
          alignItems="center"
          bg="white"
          w={{ base: "100vw", md: "500px", lg: "600px" }}
          minH="100vh"
          overflowX="hidden"
          p={4}
          mt={6}
        >
        <ChangeReminder status="error" title="Данная секция находится под разработкой!"/>
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
            >
              <Button variant="plain" pos="absolute" right={0} mt={1}>
                <Settings2 color="black" size={32} />
              </Button>
              <Box position="absolute" bottom="15px" left="25px">
                <Text color="black" fontWeight={700}>
                  {userName}
                </Text>
                <Text color="gray" fontWeight={500}>
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
              <Text ml={0.5} color="black" fontWeight={700} fontSize={16}>
                Мои курсы
              </Text>
            </Box>
            <Box mt={3} w="full" h="auto">
              {/* The container for course cards */}
              {/* <CourseCard /> */}
              <Image src="EmptyCourses.png"/>
            </Box>
          </Box>

        </Box>
      </AnimatedWrapper>

      <ProfileBottomBar />
    </Box>
  );
};

export default ContactsScreen;
