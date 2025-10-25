import { Box, Text } from "@chakra-ui/react";

export default function DrawerComponent({ title, icon }) {
  return (
    <Box
      width="auto"
      h="40px"
      p={3}
      rounded="none"
      // boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"

      display="flex"
      alignItems="center"
      gap={4}
    >
      {icon}
      <Text color="black" fontSize="18px" fontWeight={500}>
        {title}
      </Text>
    </Box>
  );
}
