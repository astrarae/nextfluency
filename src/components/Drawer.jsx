/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Drawer, Portal, Box, Text } from "@chakra-ui/react";
import Image from 'next/image'
import DrawerComponent from "./DrawerComponent";
import { PhoneForwarded, House } from "lucide-react";
import ProfileButton from "./ProfileButton";
import Link from "next/link";
import { useCurrentPage, useTheme } from "@/store";
import ThemeSwitcher from "./ThemeSwitcher";
const navDrawer = ({ children }) => {
  const { theme } = useTheme();
  const { currentPage } = useCurrentPage();
  return (
    <Drawer.Root placement="start">
      <Drawer.Trigger asChild>
        <Button variant="plain" p={0} size="md">
          {children}
        </Button>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content bgColor={theme.bgColor} color="black" w="65vw">
            <Drawer.Header
              // boxShadow="0px 4px 6px -1px gray"
              display="flex"
              alignItems="center"
              w="full"
              p={2}
              h="fit"
            >
              <Box display="flex" alignItems="center" gap={2} ml={4.5} mt={2}>
                <Image alt="infinite-logo" src="infinite-logo.svg" width={30} height={30} />
                <Text fontSize="16px" color={theme.textColor} fontWeight={700}>
                  One Fluency
                </Text>
              </Box>
            </Drawer.Header>
            <Drawer.Body
              mt={2}
              pl={2}
              pr={2.5}
              bgColor="transparent"
              display="flex"
              gap={4}
              flexDir="column"
              // overflowY="scroll"
            >
              <Link href="/">
                <DrawerComponent
                  theme={theme}
                  active={currentPage === "main"}
                  title="Главная страница"
                  icon={<House size="20px" color={theme.drawerIcons} strokeWidth={2} />}
                />
              </Link>
              <Link href="/contacts">
                <DrawerComponent
                  theme={theme}
                  active={currentPage === "contacts"}
                  title="Обратная связь"
                  icon={<PhoneForwarded color={theme.drawerIcons} size="20px" strokeWidth={2} />}
                />
              </Link>
            </Drawer.Body>
            <ThemeSwitcher ml={3}/>
            <Drawer.Footer p={3} display="flex" flexDir="column">
              <Box border="1px solid #D9D9D9" mb={1} width="full" h="1px" />
              <Link href="/profile" style={{ width: "100%", height: "100%" }}>
                <ProfileButton />
              </Link>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default navDrawer;
