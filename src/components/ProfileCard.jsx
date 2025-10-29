/* eslint-disable jsx-a11y/alt-text */
import { Box, Image, Text } from "@chakra-ui/react";
import { Mail, Phone, FileUser, CircleUser } from "lucide-react";
import ProfileBox from "./ProfileBox";
import StatusTag from "./StatusTag";
const ProfileCard = ({ avatarImage, backgroundImage, children }) => {
  return (
    <Box
      width="full"
      height="auto"
      position="relative"
      rounded="lg"
      // boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      display="flex"
      flexDirection="column"
      gap={2}
    >
      {/* <Image
        src={backgroundImage}
        w="full"
        h="150px"
        roundedStartEnd="lg"
        roundedStartStart="lg"
      />
      */}

      <ProfileBox>
        <Box display="flex" gap={2} alignItems="center">
          <Image
            src={avatarImage}
            w="3.5rem"
            h="3.5rem"
            rounded="50%"
            border="5px solid white"
          />

          <Box display="flex" flexDirection="column" alignItems="flex-start" gap={1}>
            <Text color="black" fontSize="18px" fontWeight={500}>
              Ли Валерий
            </Text>
            <Box display="flex" gap={2}>
              <StatusTag title="IELTS 7.5" />
              <StatusTag title="TOPIK 4급" />
            </Box>
          </Box>
        </Box>
      </ProfileBox>

      <ProfileBox>
        <CircleUser style={{ marginTop: "3px" }} size={24} color="black" />

        <Box w="full" display="flex" flexDir="column" >
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
      </ProfileBox>

      
        <ProfileBox>
          <Mail style={{ marginTop: "3px" }} size={24} color="black" />

          <Box flexWrap="wrap">
            <Text color="gray.400" fontSize="17px">
              Электронная почта
            </Text>
            <Text color="black" fontSize="17px">
              astrarae.stelr@outlook.com
            </Text>
          </Box>
        </ProfileBox>

        <ProfileBox>
          <Phone style={{ marginTop: "3px" }} size={24} color="black" />

          <Box >
            <Text color="gray.400" fontSize="17px">
              Телефон 
            </Text>
            <Text color="black" fontSize="17px">
              +998 50 2222 875
            </Text>
          </Box>
        </ProfileBox>
      

      <Box
        w="full"
        display="flex"
        boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
        alignItems="flex-start"
        mt={2}
        gap={4}
        p={4}
        rounded="lg"
      >
        <FileUser style={{ marginTop: "3px" }} size={24} color="black" />

        <Box w="full" display="flex" flexDir="column" gap={5}>
          <Text color="gray.400" fontSize="17px">
            Сертификаты
          </Text>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCard;
