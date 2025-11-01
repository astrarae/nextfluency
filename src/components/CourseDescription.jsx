import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const CourseDescription = ({ title, description, ...otherProps }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={description} // this tells the motion that something is a new element
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{ duration: 0.4 }}
      >
        <Box
          {...otherProps}
          boxShadow="1px 1px 7px rgba(0, 0, 0, 0.2)"
          p={2}
          rounded="lg"
        >
          <Box
            p={2}
            boxShadow="1px 1px 7px rgba(0, 0, 0, 0.12)"
            rounded="lg"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="flex-start"
            h="auto"
            mb={4}
          >
          <Text  color="black" fontSize={{base: "22px", md: "20px"}} fontWeight={700}>
            {title}
          </Text>

          </Box>
          <Text w="auto" ml={2} color="black" fontSize={{base: "20px", md: "18px"}} fontWeight="500">
            {description}
          </Text>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default CourseDescription;
