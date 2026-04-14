"use client";

import { motion } from "framer-motion";
import { Container, Weight } from "lucide-react";
import Image from "next/image";

type FocusCardProps = {
  title: string;
  desc: string;
};

export default function FocusCard({ title, desc }: FocusCardProps) {
  return (
    <div
      className={`w-full h-full flex flex-col rounded-xl p-2 gap-4 cursor-pointer transition-colors 
        hover:bg-theme1-secondary/10 light:hover:bg-[#0f1f2e]/10`}
    >
      {/* Text section */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center">
        <h3
          className={`text-lg text-nowrap font-extrabold text-theme-accent3 light:text-theme-dark-accent1 leading-tight tracking-wider`}
        >
          {title}
        </h3>
        <p
          className={`text-xs text-theme-accent4 light:text-theme-dark-accent2 leading-snug font-normal tracking-normal`}
        >
          {desc}
        </p>
      </div>

      <div className="w-full h-4/5 flex justify-center items-center relative overflow-hidden">
        {/* Subject wrapper */}
        <div className="w-full flex justify-center items-center">
          <div className="group w-[80%] h-56 relative rounded-lg overflow-hidden">
            {/* Image */}
            <img
              src="/images/kaiseki.png"
              alt="Focus Point"
              className="w-full h-full object-cover transition duration-500 
             group-hover:scale-105 group-hover:brightness-110"
            />

            {/* Overlay Frame */}
            <div
              className=" absolute inset-0 transition-all duration-500 ease-out shadow-[inset_0_0_0_40px_rgba(0,0,0,0.6)] 
                group-hover:shadow-[inset_0_0_0_0px_rgba(0,0,0,0.6)]"
            />
          </div>
        </div>
      </div>

      {/* Stacks */}
      <div className="w-full flex gap-2 text-xs font-bold">
        <span
          className={`w-[70px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px]  rounded-full text-center`}
        >
          NEXT.JS
        </span>
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px]  rounded-full text-center`}
        >
          TS
        </span>
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px]  rounded-full text-center`}
        >
          JS
        </span>
        <span
          className={`w-[70px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px]  rounded-full text-center`}
        >
          TAILWIND
        </span>
      </div>
    </div>
  );
}
