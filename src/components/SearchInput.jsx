"use client";

import { Box, Input, Text, Button } from "@chakra-ui/react";
import React from 'react'

const SearchInput = ({ handleKeyDown, children }) => {
  
  return (
    <Box
      boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
      rounded="lg"
      w="full"
      h="auto"
      p={2}
      transition={0.5}
    >
      <Text color="black" fontSize="22px" fontWeight={700}>
        Ресурный корпус
      </Text>

      <Input
        w="full"
        h="45px"
        mt={2}
        bgColor="rgba(51, 51, 51, 0.14)"
        placeholder="Введите предмет и/ или название ресурса"
        border="none"
        color="black"
        onKeyDown={handleKeyDown}
      />
      {children}
    </Box>
  );
};

export default SearchInput;
