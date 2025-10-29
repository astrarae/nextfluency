import { Alert, CloseButton } from "@chakra-ui/react";
import { useCountryReminder } from "@/store";
import { motion } from "framer-motion";
export default function ChangeReminder({ onClickHandle, ...otherProps }) {
  const { setConfirmed } = useCountryReminder();
  return (
    <motion.div
        exit={{opacity: 0.5, x: "-200px"}}
        transition={{duration: 0.2}}
    >
      <Alert.Root
        {...otherProps}
        status="info"
        title="This is the alert title"
        h="fit"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgColor="#d4d4d8"
        borderStart="3px solid #1f90ff"
        color="black"
        variant="plain"
        p={1}
        mt={2}
        mb={2}
      >
        <Alert.Indicator color="black" ml={2}/>
        <Alert.Content>
          <Alert.Description fontWeight={500}>Не забудьте выбрать страну, чтобы увидеть актуальную информацию</Alert.Description>
        </Alert.Content>
        <CloseButton
          onClick={() => setConfirmed(true)}
          variant="plain"
          color="black"
        />
      </Alert.Root>
    </motion.div>
  );
}
