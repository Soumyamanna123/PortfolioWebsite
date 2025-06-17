"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}  // zoom out while fading
          transition={{ duration: 1 }}
        >
          <motion.div
            className="flex items-center space-x-1 text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#C9E651] to-[#000000]"
            initial={{ scale: 1 }}
            exit={{ scale: 1 }}  // no scale here, handled by parent
            transition={{ duration: 1 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}  // fade + move only
              transition={{ duration: 0.5, delay: 0 }}
            >
              S
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}  // fade + move only
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              M
            </motion.span>
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}  // dot can scale vanish
              transition={{ duration: 0.4, delay: 0.8 }}
              className="text-[#C9E651]"
            >
              .
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
