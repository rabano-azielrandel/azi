"use client";

import { motion, Variants } from "framer-motion";

const hobbie = [
  { id: 1, text: "Card 1" },
  { id: 2, text: "Card 2" },
  { id: 3, text: "Card 3" },
  { id: 4, text: "Card 4" },
];

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="p-8 bg-blue-500 text-white text-center rounded-lg"
    >
      Revealed on scroll 🚀
    </motion.div>
  );
}
