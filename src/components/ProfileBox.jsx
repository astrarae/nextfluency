import { Box } from "@chakra-ui/react";
import { useTheme } from "@/store";
export default function ProfileBox({ children, ...otherProps }) {
  const { theme } = useTheme()
  return (
    <Box
      {...otherProps}
      w="auto"
      rounded="lg"
      p={3}
      display="flex"
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      bgColor={theme.teacherProfileBox}
      h="auto"
      gap={2}

    >
      {children}
    </Box>
  );
}
