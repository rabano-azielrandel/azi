"use client";

import { motion } from "framer-motion";
import { Cloud, Bell, Container, Weight } from "lucide-react";
import Image from "next/image";

type RegCardProps = {
  title: string;
  desc: string;
};

export default function FanCards({ title, desc }: RegCardProps) {
  return (
    <main className="w-full h-full rounded-xl p-4 flex flex-col">
      {/* Subject wrapper */}
      <div className="w-full h-4/5 flex justify-center items-center">
        <div
          className={`w-[80%] h-56 flex-shrink-0 flex items-center justify-center rounded-lg relative `}
        >
          <div className="flex items-center justify-center h-64 relative">
            {/* Left card */}
            <motion.div
              className="absolute w-32 h-40 bg-white shadow-lg rounded-xl flex items-center justify-center"
              initial={{ rotate: 0, x: 0 }}
              animate={{ rotate: -15, x: -80 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              <Container className="w-8 h-8 text-blue-500" />
            </motion.div>

            {/* Right card */}
            <motion.div
              className="absolute w-32 h-40 bg-white shadow-lg rounded-xl flex items-center justify-center"
              initial={{ rotate: 0, x: 0 }}
              animate={{ rotate: 15, x: 80 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              <Weight className="w-8 h-8 text-orange-500" />
            </motion.div>

            {/* Center card */}
            <motion.div
              className="relative z-10 w-28 h-28 bg-theme-accent1 shadow-xl rounded-xl flex items-center justify-center text-white text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src={`/images/project-truck-scale.png`}
                alt={title}
                width={200}
                height={200}
                className="object-contain rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Text section */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center py-4">
        <h1 className="text-lg font-bold text-white leading-tight">{title}</h1>
        <p className="text-sm text-gray-200 leading-snug">{desc}</p>
      </div>
    </main>
  );
}
