"use client";

import { motion } from "framer-motion";

export default function AnimatedWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -700 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 700 }}
      transition={{ duration: 0.6 }}
      style={{
        height: "100%",
      }}
    >
      {children}
    </motion.div>
  );
}
