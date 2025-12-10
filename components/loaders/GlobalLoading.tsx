"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PlayfulGlobalLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setIsLoading(false), 3500); // 3.5s for longer load
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div className="fixed inset-0 bg-[#120511] flex items-center justify-center z-[9999]">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-12 h-12 border-2 border-[#F6F6F6]"
              style={{ willChange: "transform" }} // GPU acceleration
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 1.5 + i * 0.5, // staggered duration for visual interest
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
