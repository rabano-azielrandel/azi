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
    p: "Intern at Toyota Bataan Inc., focused on design and computer servicing.",
  },
  {
    backgroundImage: "/images/EXP2.jpg",
    label: "FREELANCE",
    p: "Freelance developer for Resort and Truck Scale Systems, mainly backend-focused.",
  },
  {
    backgroundImage: "/images/EXP3.jpg",
    label: "CORPORATE",
    p: "Full Stack .NET dev for Payroll and HR systems, led Payslip Automation.",
  },
];

export default function Experience() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [activeIndex, SetActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className={`relative flex h-screen w-full items-center justify-center ${
        isDarkMode
          ? "bg-gradient-to-t from-theme-accent2"
          : "bg-gradient-to-b from-[#f8c98a]/10 via-[#f8c98a]/60 to-[#F8C98A]/95"
      }`}
    >
      <div
        className="relative w-full h-[80%] max-w-[1360px] p-2 gap-4
      flex flex-col justify-center items-center z-10"
      >
        <h2 className="text-4xl font-oswald font-semibold text-theme1-secondary text-center select-none cursor-default">
          Chapters In My Path
        </h2>

        <div className="flex h-[100%] w-full">
          <div className="relative w-full h-[600px] flex justify-between rounded-lg">
            <ExpSplitCard data={expData} />
          </div>
        </div>
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
