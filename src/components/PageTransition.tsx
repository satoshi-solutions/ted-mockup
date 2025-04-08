'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { pageTransition } from '@/utils/animations';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition; 