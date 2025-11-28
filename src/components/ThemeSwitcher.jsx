"use client";

import { Text, Button, Box } from "@chakra-ui/react";
import { dark_theme, light_theme } from "@/themes";
import { useTheme } from "@/store";

export default function ThemeSwitcher({ ...otherProps }) {
  const { setTheme, theme } = useTheme();

  const handleSwitch = () => {
    const newTheme = theme === light_theme ? dark_theme : light_theme;
    
    setTheme(newTheme);
    localStorage.setItem(
      "userTheme",
      newTheme == dark_theme ? "dark" : "light"
    );
  };

  return (
    <Box {...otherProps} display="flex" alignItems="center" gap={2}>
      <Button
        boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
        bgColor={theme == dark_theme ? "#212121ff" : "white"}
        variant="plain"
        rounded="lg"
        onClick={handleSwitch}
      >
        {theme.themeIcon}
      </Button>
      {/* <Text color="gray">Сменить тему</Text> */}
    </Box>
  );
}
