/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Image, Drawer, Portal, Box, Text } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";
import { BookOpen, PhoneForwarded, House } from "lucide-react";
import ProfileButton from "./ProfileButton";
import Link from "next/link";
import { useCurrentPage } from "@/store";
const navDrawer = ({ children }) => {
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
          <Drawer.Content bgColor="white" color="black" w="65vw">
            <Drawer.Header
              // boxShadow="0px 4px 6px -1px gray"
              display="flex"
              alignItems="center"
              w="full"
              p={2}
              h="fit"
            >
              <Box display="flex" alignItems="center" gap={2} ml={4.5} mt={2}>
                <Image src="infinite-logo.svg" w="30px" h="30px" />
                <Text fontSize="16px" fontWeight={700}>
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
                  active={currentPage === "main"}
                  title="Главная страница"
                  icon={<House size="20px" strokeWidth={2} />}
                />
              </Link>
              <Link href="/contacts">
                <DrawerComponent
                  active={currentPage === "contacts"}
                  title="Обратная связь"
                  icon={<PhoneForwarded size="20px" strokeWidth={2} />}
                />
              </Link>
            </Drawer.Body>

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
