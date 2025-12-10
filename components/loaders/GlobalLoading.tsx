"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function GlobalLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5 sec

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-loading"
          className="fixed inset-0 flex items-center justify-center bg-black z-[9999]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* ANIMATION WRAPPER */}
          <div className="relative w-32 h-32 flex items-center justify-center">
            {/* 1. Initial glowing line */}
            <motion.span
              className="absolute w-20 h-[2px] bg-white/60"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />

            {/* 2. Square outline reveal */}
            <motion.span
              className="absolute border border-white/40 rounded-md"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{
                width: "100%",
                height: "100%",
                opacity: 1,
              }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            />

            {/* 3. Inner pulse */}
            <motion.div
              className="absolute rounded-md bg-white/20 blur-md"
              initial={{ scale: 0.3, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.4 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
