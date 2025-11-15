"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTheme } from "@/app/ThemeProvider";

type DataInterface = {
  backgroundImage: string;
  label: string;
  p: string;
};

interface ExpCardProps {
  data: DataInterface[];
}

const getRoundedClass = (idx: number) => {
  if (idx == 0) return "rounded-l-lg";
  if (idx == 2) return "rounded-r-lg";
  return "";
};

const ExpSplitCard = ({ data }: ExpCardProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clicked, setClicked] = useState<number | null>(null);
  const { isDarkMode, toggleTheme } = useTheme();

  const handdleClick = (idx: number) => {
    setClicked(clicked === idx ? null : idx);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="group w-full flex justify-center items-center cursor-pointer gap-0 transition-[gap] duration-700 ease-[cubic-bezier(0.37, 0, 0.63, 1)] hover:gap-6">
        {data.map((src, idx) => (
          <div
            key={idx}
            onClick={() => handdleClick(idx)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative h-[600px] w-[33.3%] flex-none flex justify-center items-center ${getRoundedClass(
              idx
            )} transition-all duration-700 ease-[cubic-bezier(0.37, 0, 0.63, 1)] group-hover:rounded-xl overflow-hidden`}
          >
            {/* HOVER */}
            <div
              className={`absolute top-0 left-0 h-full w-full flex flex-col justify-end items-start pl-8
                ${
                  clicked == idx
                    ? isDarkMode
                      ? " border-1 border-white rounded-xl"
                      : " border-1 border-black rounded-xl"
                    : ""
                } `}
            >
              <h2
                className={`text-2xl font-extrabold text-[#F7F7F7] opacity-0 transition-all duration-400 ease-[cubic-bezier(0.37, 0, 0.63, 1)] 
                  mb-30 ${
                    hoveredIndex == idx
                      ? clicked == idx
                        ? ""
                        : "opacity-100 -translate-y-3 z-10"
                      : "opacity-0 translate-y-0"
                  } select-none`}
              >
                {src.label}
              </h2>
            </div>
            <Image
              src={src.backgroundImage}
              alt={"EXP"}
              height={400}
              width={800}
              className={`object-contain transition-transform duration-700 ease-[cubic-bezier(0.37,0,0.63,1)] ${
                clicked == idx ? "scale-110" : "scale-100"
              } ${
                hoveredIndex == idx && clicked !== idx
                  ? "brightness-90"
                  : "brightness-100"
              }`}
            />
            {/* CLICK */}
            <div
              className={`absolute inset-0 h-full w-full flex flex-col gap-2 justify-center items-start p-8 transition-all duration-700 
                ease-[cubic-bezier(0.37, 0, 0.63, 1)] ${
                  clicked == idx
                    ? "rounded-xl opacity-100 -translate-y-10 bg-gray-700/20"
                    : "rounded-xl opacity-0 translate-y-40"
                }`}
            >
              <h2
                className={`text-2xl font-extrabold text-[#F7F7F7] select-none`}
              >
                {src.label}
              </h2>
              <p
                className={`text-wrap text-md text-gray-200 leading-snug font-normal tracking-normal select-none`}
              >
                {src.p}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpSplitCard;
