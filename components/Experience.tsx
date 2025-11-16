"use client";

import { useState } from "react";
import Image from "next/image";
import ExpCard from "./ui/ExpCard";
import ExpSplitCard from "./ui/ExpSplitCard";
import { useTheme } from "@/app/ThemeProvider";

const expData = [
  {
    backgroundImage: "/images/EXP1.jpg",
    label: "INTERN",
    p: "Interned at Toyota Bataan Inc., focusing on design tasks and computer servicing to support the company’s technical operations.",
  },
  {
    backgroundImage: "/images/EXP2.jpg",
    label: "FREELANCE",
    p: "Worked as a freelance developer on resort management and truck scale systems, focusing on backend functionality and system reliability.",
  },
  {
    backgroundImage: "/images/EXP3.jpg",
    label: "CORPORATE",
    p: "Served as a Full Stack .NET Developer for Payroll and HR systems, leading the design and deployment of Payslip Automation features.",
  },
];

export default function Experience() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeIndex, SetActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className={`relative w-full  ${
        isDarkMode
          ? "bg-gradient-to-t from-theme-accent2"
          : "bg-gradient-to-t from-[#e9f1fa] to-[#5E4075]/10"
      }`}
    >
      <div
        className="relative w-full max-w-[1360px] mx-auto p-2 gap-4
      flex flex-col justify-center items-center z-10"
      >
        <h2
          className={`text-4xl font-oswald font-semibold text-center ${
            isDarkMode ? "text-theme1-secondary" : "text-theme1-base"
          } select-none cursor-default`}
        >
          Chapters In My Path
        </h2>

        <ExpSplitCard data={expData} />
      </div>

      <Image
        src={isDarkMode ? "/images/wave_dark.svg" : "/images/wave_light.svg"}
        alt="wave"
        width={1920}
        height={500}
        className="absolute -bottom-90 left-0 object-contain w-fit h-auto scale-y-[-1]"
      />
    </section>
  );
}
