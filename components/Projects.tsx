"use client";

import React from "react";
import SplitCard from "./ui/SplitCard";
import RippleCard from "./ui/RippleCard";
import FanCard from "./ui/FanCard";
import DiceCard from "./ui/DiceCard";
import RegCard from "./ui/RegCard";
import Bot from "./ui/Bot";
import Image from "next/image";
import { useTheme } from "../app/ThemeProvider";

const Projects = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <section
      id="projects"
      className={`relative mt-60 w-full pt-0 ${
        isDarkMode
          ? "bg-gradient-to-b from-theme-accent2"
          : "bg-gradient-to-t from-theme2-accent1/10 via-[#3a3f52]/60 to-[#F8C98A]"
      }`}
    >
      <Image
        src={isDarkMode ? "/images/wave_dark.svg" : "/images/wave_light.svg"}
        alt="wave"
        width={1920}
        height={500}
        className={`absolute -top-92 left-0 object-contain w-fit h-auto ${
          isDarkMode
            ? ""
            : "bg-gradient-to-t from-[#f6e0b3]/20 via-[#b7b3d9]/10 to-[#0a0f1a]/5 "
        } `}
      />

      <div
        className="relative w-full max-w-[1360px] pt-20 pb-40 mx-auto gap-x-2 gap-y-4
      flex flex-col justify-center items-center"
      >
        <div className="w-full h-full flex gap-4">
          <div
            className={`w-[67%] h-auto rounded-xl p-4 ${
              isDarkMode ? "bg-[#18161B]" : "bg-[#232A36]"
            } border-1 border-white/30`}
          >
            <Bot />
          </div>

          <div
            className={`w-[33%] h-auto rounded-xl p-4 ${
              isDarkMode ? "bg-[#18161B]" : "bg-[#232A36]"
            } border-1 border-white/30`}
          >
            <DiceCard
              title="DIGITAL PAYSLIP"
              desc="Digitalize traditional payslip."
            />
          </div>
        </div>

        <div className="w-full h-full flex gap-4">
          <div
            className={`w-full rounded-xl p-4 ${
              isDarkMode ? "bg-[#18161B]" : "bg-[#232A36]"
            } border-1 border-white/30`}
          >
            <SplitCard />
          </div>

          <div
            className={`w-full rounded-xl p-4 ${
              isDarkMode ? "bg-[#18161B]" : "bg-[#232A36]"
            } border-1 border-white/30`}
          >
            <RippleCard
              image="project-resort-management.jpg"
              title="RESORT MANAGEMENT"
              desc="Streamline reservations, billing, and staff managemnt."
            />
          </div>

          <div
            className={`w-full rounded-xl p-4 ${
              isDarkMode ? "bg-[#18161B]" : "bg-[#232A36]"
            } border-1 border-white/30`}
          >
            <FanCard
              title="TRUCK SCALE"
              desc="Data logging and receipt management."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// bg-gradient-to-b from-white/4 via-[#11020f]  to-theme1-base #4d2926
