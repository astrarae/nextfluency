/* eslint-disable jsx-a11y/alt-text */
import { Box, Image, Text } from "@chakra-ui/react";
import { Mail, Phone, FileUser, CircleUser } from "lucide-react";

const ProfileCard = ({ avatarImage, backgroundImage, children }) => {
  return (
    <Box
      width="full"
      height="auto"
      position="relative"
      rounded="lg"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      gap={2}
    >
      <Image
        src={backgroundImage}
        w="full"
        h="150px"
        roundedStartEnd="lg"
        roundedStartStart="lg"
      />
      <Image
        src={avatarImage}
        w="6rem"
        h="6rem"
        transform="translateX(-50%)"
        position="absolute"
        left="50%"
        top="100px"
        rounded="50%"
        border="5px solid white"
      />

      <Box p={5} display="flex" flexDir="column" gap={6} mt={8}>
        <Box w="full" display="flex" alignItems="flex-start" gap={4}>
          <CircleUser style={{ marginTop: "3px" }} size={24} color="black" />

          <Box w="full" display="flex" flexDir="column" gap={0}>
            <Text color="gray.400" fontSize="17px">
              Обо мне
            </Text>
            <Box color="black" flexWrap="wrap">
              <ol>
                <li>Нахожусь в преподаваний двух языков полтора года.</li>
                <li>
                  Преподаю оба языка с большим вниманием на самого ученика и его
                  цели.
                </li>
                <li>
                  Также предоставляю услуги создания личного вебсайта для вашего
                  бизнеса или личного использования.
                </li>
              </ol>
            </Box>
          </Box>
        </Box>

        <Box w="full" display="flex" alignItems="flex-start" gap={4}>
          <Mail style={{ marginTop: "3px" }} size={24} color="black" />

          <Box>
            <Text color="gray.400" fontSize="17px">
              Электронная почта
            </Text>
            <Text color="black" fontSize="17px">
              astrarae.stelr@outlook.com
            </Text>
          </Box>
        </Box>

        <Box w="full" display="flex" alignItems="flex-start" mt={2} gap={4}>
          <Phone style={{ marginTop: "3px" }} size={24} color="black" />

          <Box>
            <Text color="gray.400" fontSize="17px">
              Телефон (Рабочий){" "}
            </Text>
            <Text color="black" fontSize="17px">
              +998 50 2222 875
            </Text>
          </Box>
        </Box>

        <Box w="full" display="flex" alignItems="flex-start" mt={2} gap={4}>
          <FileUser style={{ marginTop: "3px" }} size={24} color="black" />

          <Box w="full" display="flex" flexDir="column" gap={5}>
            <Text color="gray.400" fontSize="17px">
              Сертификаты
            </Text>
            {children}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
