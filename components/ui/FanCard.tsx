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
    <div className="w-full h-full flex flex-col rounded-xl p-2 gap-4 cursor-pointer hover:bg-theme1-secondary/10 transition-colors">
      {/* Text section */}
      <div className="w-full h-1/5  flex flex-col items-start justify-center">
        <h2 className="text-lg font-extrabold text-theme-accent3 leading-tight tracking-wider">
          {title}
        </h2>
        <p className="text-xs text-theme-accent4 leading-snug font-normal tracking-normal">
          {desc}
        </p>
      </div>

      <div className="w-full h-4/5 flex justify-center items-center relative overflow-hidden">
        {/* Subject wrapper */}
        <div className="w-full flex justify-center items-center">
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
      </div>

      {/* Stacks */}
      <div className="w-full flex gap-2 text-xs font-bold">
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          C#
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          JS
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          SQL
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          .NET
        </span>
      </div>
    </div>
  );
}
