"use client";

import React from "react";
import SplitCard from "./ui/SplitCard";
import RippleCard from "./ui/RippleCard";
import FanCard from "./ui/FanCard";
import DiceCard from "./ui/DiceCard";
import Bot from "./ui/Bot";
import Wave from "./ui/Wave";
import { useTheme } from "../app/ThemeProvider";

const Projects = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <section
      id="projects"
      className={`relative mt-10 sm:mt-40 w-full px-4 py-20  ${
        isDarkMode
          ? "bg-gradient-to-b from-theme-accent2"
          : "bg-gradient-to-b from-[#e9f1fa] to-[#F6F6F6]/10"
      }`}
    >
      {/* Wave */}
      <Wave
        isDarkMode={isDarkMode}
        className="absolute -top-18 xxs:-top-20 xs:-top-24 2xs:-top-30 sm:-top-36 md:-top-42 2md:-top-46 3md:-top-50 lg:-top-58 2lg:-top-60 xl:-top-70 2xl:-top-76 3xl:-top-80 4xl:-top-85 8xl:-top-90
        left-0 w-full h-auto transition-colors duration-500"
      />

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
        <div className="w-full gap-6 flex lg:flex-col overflow-x-scroll pb-2 lg:pb-0 lg:overflow-hidden">
          {/* TOP DIV */}
          <div className="w-full h-full flex gap-6">
            {/* BOT */}
            <div
              className={`hidden lg:block  w-full lg:w-[67%] h-auto rounded-xl p-4 border-1 ${
                isDarkMode
                  ? "bg-[#18161B] border-white/30"
                  : "bg-[#dce6f0] border-black/30"
              }`}
            >
              <Bot />
            </div>

            {/* DIGITAL PAYSLIP */}
            <div
              className={`w-full min-w-[340px] lg:w-[33%] h-[355px] lg:h-auto rounded-xl p-4 border-1 ${
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

          {/* BOT DIV */}
          <div className="w-full h-full flex gap-6">
            {/* THESIS */}
            <div
              className={`w-full min-w-[340px] h-[355px] lg:h-auto rounded-xl p-4 border-1 ${
                isDarkMode
                  ? "bg-[#18161B] border-white/30"
                  : "bg-[#dce6f0] border-black/30"
              }`}
            >
              <SplitCard />
            </div>

            {/* RESORT MANAGEMENT */}
            <div
              className={`w-full min-w-[340px] h-[355px] lg:h-auto  rounded-xl p-4 border-1 ${
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

            {/* TRUCK SCALE */}
            <div
              className={`w-full min-w-[340px] h-[355px] lg:h-auto  rounded-xl p-4 border-1 ${
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
