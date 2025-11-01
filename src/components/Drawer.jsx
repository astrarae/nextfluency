/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Image, Drawer, Portal, Box, Text } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";
import { BookOpen, PhoneForwarded, House } from "lucide-react";
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
              <Image src="infinite-logo.svg" w="30px" h="30px" />
              <Text fontSize="16px" fontWeight={700}>One Fluency</Text>
            </Drawer.Header>
            <Drawer.Body
              mt={2}
              p={2}
              bgColor="transparent"
              display="flex"
              gap={4}
              flexDir="column"
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

            <Drawer.Footer p={4}></Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default navDrawer;
