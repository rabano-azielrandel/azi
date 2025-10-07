"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Particles } from "./shadcn-io/particles";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCSharp, TbSql } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";

import {
  Cloud,
  LockKeyhole,
  FileChartColumn,
  Binoculars,
  FileDown,
  FileUp,
} from "lucide-react";

const faces = [
  { text: "SMTP Support", Icon: Cloud },
  { text: "Data Encryption", Icon: LockKeyhole },
  { text: "Payslip Generation", Icon: FileChartColumn },
  { text: "Email Monitoring", Icon: Binoculars },
  { text: "Downloadable Payslips", Icon: FileDown },
  { text: "File Uploads", Icon: FileUp },
];

type DiceCardProps = {
  title: string;
  desc: string;
};

export default function DiceCard({ title, desc }: DiceCardProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        let next;
        do {
          next = Math.floor(Math.random() * faces.length);
        } while (next === prev); // avoid repeating the same side
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const rotations = [
    { rotateX: 0, rotateY: 0 }, // front
    { rotateX: 0, rotateY: 180 }, // back
    { rotateX: 90, rotateY: 0 }, // top
    { rotateX: -90, rotateY: 0 }, // bottom
    { rotateX: 0, rotateY: 90 }, // right
    { rotateX: 0, rotateY: -90 }, // left
  ];

  return (
    <main className="w-full h-full rounded-xl p-4 flex flex-col gap-4 justify-center items-center">
      {/* Text section */}
      <div className="w-full flex flex-col items-start justify-center py-4">
        <h1 className="text-lg font-bold text-theme-accent1 leading-tight tracking-wider">
          {title}
        </h1>
        <p className="text-sm text-white leading-snug font-thin tracking-tight">
          {desc}
        </p>
      </div>

      {/* Subject */}
      <div className="w-full flex justify-center items-center relative overflow-hidden">
        <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          staticity={50}
          color="#ffffff"
          size={0.8}
        />

        {/* Cube wrapper */}
        <div className="w-full flex justify-center items-center">
          <div
            className="flex items-center justify-center h-64"
            style={{ perspective: "1000px" }}
          >
            <motion.div
              animate={{
                ...rotations[index],
                rotateZ: [0, 20, -20, 0], // wobble like dice roll
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative w-40 h-40"
              style={{ transformStyle: "preserve-3d" }}
            >
              {faces.map(({ text, Icon }, i) => (
                <div
                  key={i}
                  className="absolute w-40 h-40 flex flex-col items-center justify-center gap-2 p-2 bg-white text-center text-sm font-semibold text-gray-800 rounded-2xl shadow-2xl border border-gray-200"
                  style={{
                    transform: [
                      "translateZ(80px)", // front
                      "rotateY(180deg) translateZ(80px)", // back
                      "rotateX(90deg) translateZ(80px)", // top
                      "rotateX(-90deg) translateZ(80px)", // bottom
                      "rotateY(90deg) translateZ(80px)", // right
                      "rotateY(-90deg) translateZ(80px)", // left
                    ][i],
                  }}
                >
                  <Icon className="w-6 h-6 text-blue-500" />
                  {text}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stacks */}
      <div className="w-full flex gap-4">
        <TbBrandCSharp className="text-theme1-accent" />
        <IoLogoJavascript className="text-theme1-accent" />
        <TbSql className="text-theme1-accent" />
        <SiDotnet className="text-theme1-accent" />
      </div>
    </main>
  );
}
