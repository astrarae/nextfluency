/* eslint-disable react-hooks/rules-of-hooks */
import { Button, Image, Drawer, Portal, Box } from "@chakra-ui/react";
import DrawerComponent from "./DrawerComponent";
import { BookOpen, PhoneForwarded } from "lucide-react";
import Link from "next/link";
import WebBanner from "./WebBanner";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const navDrawer = ({ children }) => {
  const [ad, setAd] = useState(true);
  function handleClick() {
    setAd((prev) => false);
  }

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
          <Drawer.Content bgColor="white" color="black" w="68vw">
            <Drawer.Header
              boxShadow="0px 4px 6px -1px rgba(91, 10, 121, 0.31)"
              display="flex"
              flexDir="row"
              alignItems="center"
              justifyContent="flex-start"
              gap={2}
              h="60px"
            >
              <Box
                display="flex"
                flexDir="row"
                gap={2}
                position="relative"
                right={3}
                flexWrap="wrap"
              >
                <Image src="infinite-logo.svg" w="30px" h="30px" />
                <Drawer.Title>OneFluency</Drawer.Title>
              </Box>
            </Drawer.Header>
            <Drawer.Body
              mt={4}
              p={2}
              bgColor="transparent"
              display="flex"
              gap={3}
              flexDir="column"
            >
              <Link href="/resources">
                <DrawerComponent
                  title="Ресурсы"
                  icon={<BookOpen color="black" />}
                />
              </Link>
              <Link href="/contacts">
                <DrawerComponent
                  title="Контакты"
                  icon={<PhoneForwarded color="black" />}
                />
              </Link>
            </Drawer.Body>

            <Drawer.Footer p={4}>
              <AnimatePresence>
                {ad && (
                  <motion.div
                    style={{
                      width: "100%"
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <WebBanner handleClick={handleClick} />
                  </motion.div>
                )}
              </AnimatePresence>
            </Drawer.Footer>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default navDrawer;
