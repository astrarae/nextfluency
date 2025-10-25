import { Box, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";

const CourseDescription = ({ title, description, ...otherProps }) => {
  return (
    <Box {...otherProps}>
      <AnimatePresence mode="wait">
        <motion.div
          key={description} // this tells the motion that something is a new element
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 0.4 }}
        >
          <h1>{title}</h1>
          <Text color="black" fontSize="20px" fontWeight="500">
            {description}
          </Text>
        </motion.div>
      </AnimatePresence>
    </Box>
  );
};

export default CourseDescription;
