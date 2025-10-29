import { Text, Box, Button, Image } from "@chakra-ui/react";

import { X } from "lucide-react";
export default function WebBanner({ handleClick }) {
  return (
    <Box
      h="fit"
      w="full"
      rounded="lg"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      display="flex"
      flexDirection="column"
      justifyContent="flex-start"
      p={2}
    >
      <Box h="5px" display="flex" justifyContent="flex-end">

      <Button w="2px" h="30px" variant="plain" onClick={handleClick}>
          <X color="black" />
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-between" >
        <Image
          src="https://i.pinimg.com/736x/3c/7f/60/3c7f601cc5508c3f54b3f819e86cad69.jpg"
          color="white"
          w="170px"
          h="125px"
          rounded="lg"
          objectFit="fit"
        />
      </Box>
      <Box
        p={1}
        mt={2}
        display="flex"
        gap={2}
        flexDir="column"
      >
        <Text color="black" fontSize="20px" fontWeight={500}>Создам твой вебсайт</Text>
        <Text color="gray.700" fontSize="16px" fontWeight={500}>Делаю сайты под ключ: чистый код, современный дизайн и внимание к деталям.</Text>
      </Box>
    </Box>
  );
}
