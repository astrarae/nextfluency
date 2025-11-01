import { Box, Text } from "@chakra-ui/react";
import './DrawerComponent.css'
export default function DrawerComponent({ active=false,title, icon }) {
  return (
    <Box
      width="auto"
      h="40px"
      p={2}
      className={active && "active"}
      display="flex"
      alignItems="center"
      gap={2.5}
      ml={1}
      transition={{duration: "0.4"}}
    >
      {icon}
      <Text  fontSize="18px" fontWeight={500}>
        {title}
      </Text>
    </Box>
  );
}
