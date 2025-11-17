"use client";

import React from "react";
import SplitCard from "./ui/SplitCard";
import RippleCard from "./ui/RippleCard";
import FanCard from "./ui/FanCard";
import DiceCard from "./ui/DiceCard";
import Bot from "./ui/Bot";
import Image from "next/image";
import Wave from "./ui/Wave";
import { useTheme } from "../app/ThemeProvider";

const Projects = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <section
      id="projects"
      className={`relative mt-10 sm:mt-60 w-full pt-0 px-4 ${
        isDarkMode
          ? "bg-gradient-to-b from-theme-accent2"
          : "bg-gradient-to-b from-[#e9f1fa] to-[#5E4075]/10"
      }`}
    >
      {/* Wave */}
      <div className="absolute -top-60 sm:-top-92 left-0 w-[1100px] sm:w-[1920px] h-fit">
        <Wave
          isDarkMode={isDarkMode}
          className="absolute object-contain w-fit h-fit"
        />
      </div>

      {/* Content */}
      <div
        className="relative w-full max-w-[1360px] pt-20 mx-auto gap-x-2 gap-y-8 lg:gap-y-4
      flex flex-col justify-center items-center"
      >
        <h2
          className={`block lg:hidden text-4xl font-oswald font-semibold text-center tracking-[8px] ${
            isDarkMode ? "text-theme1-secondary" : "text-theme1-base"
          } select-none cursor-default`}
        >
          PROJECTS
        </h2>
        <div className="w-full gap-4 flex flex-col">
          <div className="w-full h-full flex flex-col lg:flex-row gap-4">
            <div
              className={`hidden lg:block  w-full lg:w-[67%] h-auto rounded-xl p-4 border-1 ${
                isDarkMode
                  ? "bg-[#18161B] border-white/30"
                  : "bg-[#dce6f0] border-black/30"
              }`}
            >
              <Bot />
            </div>

            <div
              className={`w-full lg:w-[33%] h-[365px] lg:h-auto rounded-xl p-4 border-1 ${
                isDarkMode
                  ? "bg-[#18161B] border-white/30"
                  : "bg-[#dce6f0] border-black/30"
              }`}
            >
              <DiceCard
                title="DIGITAL PAYSLIP"
                desc="Digitalize traditional payslip."
              />
            </div>
          </div>

          <div className="w-full h-full flex flex-col lg:flex-row gap-4">
            <div
              className={`w-full h-[365px] lg:h-auto rounded-xl p-4 border-1 ${
                isDarkMode
                  ? "bg-[#18161B] border-white/30"
                  : "bg-[#dce6f0] border-black/30"
              }`}
            >
              <SplitCard />
            </div>

            <div
              className={`w-full rounded-xl p-4 border-1 ${
                isDarkMode
                  ? "bg-[#18161B] border-white/30"
                  : "bg-[#dce6f0] border-black/30"
              }`}
            >
              <RippleCard
                image="project-resort-management.jpg"
                title="RESORT MANAGEMENT"
                desc="Streamline reservations, billing, and staff managemnt."
              />
            </div>

            <div
              className={`w-full rounded-xl p-4 border-1 ${
                isDarkMode
                  ? "bg-[#18161B] border-white/30"
                  : "bg-[#dce6f0]  border-black/30"
              }`}
            >
              <FanCard
                title="TRUCK SCALE"
                desc="Data logging and receipt management."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// bg-gradient-to-b from-white/4 via-[#11020f]  to-theme1-base #4d2926
