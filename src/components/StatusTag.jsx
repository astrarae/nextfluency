import { Box, Text } from "@chakra-ui/react";

export default function StatusTag({title}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDir="column"
      alignItems="center"
      w="fit"
      h="24px"
      rounded="2xl"
      bgColor="#1f90ff"
      pl={4}
      pr={4}
    >
      <Text mt={0.5} color="white" fontSize="0.7rem" fontWeight={500}>{title}</Text>
    </Box>
  );
}
