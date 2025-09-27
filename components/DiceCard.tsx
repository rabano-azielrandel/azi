"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const phrases = [
  "Access Real-Time Insights",
  "Automated Reports",
  "Smart Alerts",
  "Data You Can Trust",
  "Instant Analytics",
  "Predictive Metrics",
];

type DiceCardProps = {
  title: string;
  desc: string;
};

export default function DiceCard({ title, desc }: DiceCardProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // pick next side randomly
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // Cube rotation states (one for each face)
  const rotations = [
    { rotateX: 0, rotateY: 0 }, // front
    { rotateX: 0, rotateY: 180 }, // back
    { rotateX: 90, rotateY: 0 }, // top
    { rotateX: -90, rotateY: 0 }, // bottom
    { rotateX: 0, rotateY: 90 }, // right
    { rotateX: 0, rotateY: -90 }, // left
  ];

  return (
    <main className="w-full h-full rounded-xl p-4 flex flex-col">
      {/* Subject wrapper */}
      <div className="w-full h-4/5 flex justify-center items-center">
        <div
          className="flex items-center justify-center h-64"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            key={index}
            animate={rotations[index]}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative w-40 h-40"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* FRONT */}
            <div
              className="absolute w-40 h-40 flex items-center justify-center bg-white text-center text-sm font-semibold text-gray-800 rounded-lg shadow-md"
              style={{ transform: "translateZ(80px)" }}
            >
              {phrases[0]}
            </div>

            {/* BACK */}
            <div
              className="absolute w-40 h-40 flex items-center justify-center bg-white text-center text-sm font-semibold text-gray-800 rounded-lg shadow-md"
              style={{ transform: "rotateY(180deg) translateZ(80px)" }}
            >
              {phrases[1]}
            </div>

            {/* TOP */}
            <div
              className="absolute w-40 h-40 flex items-center justify-center bg-white text-center text-sm font-semibold text-gray-800 rounded-lg shadow-md"
              style={{ transform: "rotateX(90deg) translateZ(80px)" }}
            >
              {phrases[2]}
            </div>

            {/* BOTTOM */}
            <div
              className="absolute w-40 h-40 flex items-center justify-center bg-white text-center text-sm font-semibold text-gray-800 rounded-lg shadow-md"
              style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
            >
              {phrases[3]}
            </div>

            {/* RIGHT */}
            <div
              className="absolute w-40 h-40 flex items-center justify-center bg-white text-center text-sm font-semibold text-gray-800 rounded-lg shadow-md"
              style={{ transform: "rotateY(90deg) translateZ(80px)" }}
            >
              {phrases[4]}
            </div>

            {/* LEFT */}
            <div
              className="absolute w-40 h-40 flex items-center justify-center bg-white text-center text-sm font-semibold text-gray-800 rounded-lg shadow-md"
              style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
            >
              {phrases[5]}
            </div>
          </motion.div>
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
