import { motion } from "framer-motion"

const RegularPageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{x: -700}}
      animate={{x: 0}}
      exit={{ opacity: 0}}
      transition={{
        type: "spring",
        stiffness: 60,   // lower = softer
        damping: 15,     // higher = less bounce
      }}
    >
      {children}
    </motion.div>
  )
}

export default RegularPageWrapper;