import { Alert, CloseButton } from "@chakra-ui/react";
import { useCountryReminder, useTheme } from "@/store";
import { motion } from "framer-motion";
import { useRef } from "react";
export default function ChangeReminder({ title,status,onClickHandle, ...otherProps }) {
  const { setConfirmed } = useCountryReminder();
  const { theme } = useTheme();
  const divRef = useRef(null);
  const handleClick = () => {
    divRef.current?.remove();
  };
  return (
    <motion.div
        exit={{opacity: 0.5, x: "-200px"}}
        transition={{duration: 0.2}}
        style={{
          width: "100%"
        }}
    >
      <Alert.Root
      ref={divRef}
        {...otherProps}
        status={status}
        h="fit"
        w="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor={theme.alertBg}
        borderStart="3px solid #1f90ff"
        color={theme.textColor}
        variant="plain"
        p={1}
        mt={2}
        mb={2}
      >
        <Alert.Indicator color={theme.textColor} ml={2}/>
        <Alert.Content>
          <Alert.Description fontWeight={500}>{title}</Alert.Description>
        </Alert.Content>
        <CloseButton
          onClick={handleClick}
          variant="plain"
          color={theme.textColor}
        />
      </Alert.Root>
    </motion.div>
  );
}
