import { Box, Text } from "@chakra-ui/react";

export default function TabTagButton({
  onClick,
  title,
  icon,
  flex,
  ...otherProps
}) {
  return (
    <Box
      w="auto"
      minW="160px"
      h="auto"
      //roundedStartStart="lg"
      transition="0.2s"
      onClick={onClick}
      display="flex"
      justifyContent="center"
      alignItems="center"
      p={2}
      flex={flex}
    >
      <Text
        pl={2}
        pt={1}
        pb={1}
        pr={3}
        rounded="lg"
        display="flex"
        flexWrap="nowrap"
        justifyContent="center"
        w="full"
        alignItems="center"
        transition="0.4s"
        whiteSpace="nowrap"
        {...otherProps}
        fontWeight={500}
        gap={2}
        fontSize="0.8rem"
      >
        {icon}
        {title}
      </Text>
    </Box>
  );
}
