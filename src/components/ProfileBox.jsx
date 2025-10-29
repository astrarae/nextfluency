import { Box } from "@chakra-ui/react";

export default function ProfileBox({ children, ...otherProps }) {
  return (
    <Box
      {...otherProps}
      w="auto"
      rounded="lg"
      p={3}
      display="flex"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      h="auto"
      gap={2}
    >
      {children}
    </Box>
  );
}
