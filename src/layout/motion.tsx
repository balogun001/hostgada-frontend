import { motion } from 'framer-motion';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

function Motion({ children }: Props) {
  const variants = {
    hidden: { opacity: 0, x: 50, y: 0 },
    enter: { opacity: 4, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -50 },
  };
  return (
    <motion.main
      variants={variants} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: 'linear', duration: 0.4 }} // Set the transition to linear
    >
      {children}
    </motion.main>
  );
}

export default Motion;
