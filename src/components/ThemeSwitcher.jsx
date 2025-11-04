"use client";

import { Icon, Switch, Text, Button, Box } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { dark_theme, light_theme } from "@/themes";
import { useEffect, useState } from "react";
import { useTheme } from "@/store";

export default function ThemeSwitcher({ ...otherProps }) {
  const [localTheme, setLocalTheme] = useState(light_theme);
  const { setTheme } = useTheme();
  const handleSwitch = () => {
  const newTheme = localTheme === light_theme ? dark_theme : light_theme;
  setLocalTheme(newTheme);
  setTheme(newTheme);
  localStorage.setItem("userTheme", newTheme == dark_theme ? "dark" : "light")
};

  
  return (
    <Box {...otherProps} display="flex" alignItems="center"  gap={2}>
      <Button boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"  bgColor={localTheme == dark_theme ? "#212121ff" : "none"} variant="plain" onClick={handleSwitch}>
        {localTheme == light_theme ? (
          <Icon as={FaSun} color="yellow.400" />
        ) : (
          <Icon as={FaMoon} color="gray.400" />
        )}
      </Button>
      <Text color="gray">Сменить тему</Text>
    </Box>
  );
}
