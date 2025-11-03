/* eslint-disable jsx-a11y/alt-text */
import { Box, Button, Text, Image } from "@chakra-ui/react";
import { useUserStore } from "@/store";
import { ChevronRight } from "lucide-react";
export default function ProfileButton() {
  const { userName, userProfilePicture } = useUserStore();
  return (
    <Box
      w="full"
      h="65px"
      p={2}
      rounded="lg"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box display="flex" ml={2} gap={3} alignItems="center">
        <Image src={userProfilePicture} w="35px" h="35px" rounded="50%" />
        <Box display="flex" minW="130px" flexDir="column">
          <Text color="black" fontWeight={700}>
            {userName}
          </Text>
          <Text color="gray" fontWeight={500}>
            Личный кабинет
          </Text>
        </Box>
      </Box>
      <Button variant="plain" color="black" h="50px" w="auto" pos="relative" left="15px">
        <ChevronRight
          color="#726D6D"
          strokeWidth={2}
          style={{
            width: "25px",
            height: "25px",
          }}
        />
      </Button>
    </Box>
  );
}
