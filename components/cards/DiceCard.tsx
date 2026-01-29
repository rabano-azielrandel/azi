"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Particles } from "../ui/shadcn-io/particles";

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
    <section
      className={`w-full h-full flex flex-col rounded-xl p-2 gap-4 cursor-pointer transition-colors hover:bg-theme1-secondary/10 light:hover:bg-[#0f1f2e]/10`}
    >
      {/* Text section */}
      <div className="w-full flex flex-col items-start justify-center gap-1">
        <h2
          className={`text-lg font-extrabold text-theme-accent3 light:text-theme-dark-accent1 leading-tight tracking-wider`}
        >
          {title}
        </h2>
        <p
          className={`text-xs text-theme-accent4 light:text-theme-dark-accent2 leading-snug font-normal tracking-normal`}
        >
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
      <div className="w-full flex gap-2 text-xs font-bold">
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px]  rounded-full text-center`}
        >
          C#
        </span>
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px]  rounded-full text-center`}
        >
          JS
        </span>
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px]  rounded-full text-center`}
        >
          SQL
        </span>
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px]  rounded-full text-center`}
        >
          .NET
        </span>
      </div>
    </section>
  );
}
