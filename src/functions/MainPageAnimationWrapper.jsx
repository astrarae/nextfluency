import { AnimatePresence, motion } from "framer-motion";

export default function MainPageAnimationWrapper({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, x: -700 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          height: "100%",
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
