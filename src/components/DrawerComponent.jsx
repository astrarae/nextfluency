import { Box, Text } from "@chakra-ui/react";
import './DrawerComponent.css'
export default function DrawerComponent({ theme, active=false,title, icon }) {
  return (
    <Box
      width="auto"
      h="40px"
      p={0}
      className={active && "active"}
      bgColor={active && theme.drawerHighlighted}
      display="flex"
      alignItems="center"
      gap={2.5}
      ml={1}
      transition={{duration: "0.4"}}
    >
      <Box
        display="flex"
        gap={2}
        ml={3}
      >
        {icon}
      <Text  fontSize="18px" color={theme.textColor} fontWeight={500}>
        {title}
      </Text>
      </Box>
    </Box>
  );
}
