import { AnimatePresence, motion } from "framer-motion";

export default function MainPageAnimationWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        style={{
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
