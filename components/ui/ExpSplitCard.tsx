import React, { useState } from "react";
import Image from "next/image";

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
  const [flipped, setFlipped] = useState<number | null>(null);

  const handleFlip = (idx: number) => {
    setFlipped(flipped === idx ? null : idx);
  };

  return (
    <div className="w-full flex justify-center items-center">
      <div className="group w-full flex justify-center items-center cursor-pointer gap-0 transition-[gap] duration-700 ease-[cubic-bezier(0.37, 0, 0.63, 1)] hover:gap-6">
        {data.map((src, idx) => (
          <div
            key={idx}
            onClick={() => handleFlip(idx)}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`relative h-[600px] w-[33.3%] flex-none flex justify-center items-center ${getRoundedClass(
              idx
            )} transition-all duration-700 ease-[cubic-bezier(0.37, 0, 0.63, 1)] ${
              flipped == idx ? "rotate-y-180" : ""
            } group-hover:rounded-xl overflow-hidden`}
          >
            <div
              className={`absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center ${
                flipped == idx
                  ? "bg-[#18161B] border-1 border-white rounded-xl"
                  : "bg-[#18161B]/40"
              }`}
            >
              <h2
                className={`text-2xl font-extrabold text-theme-accent3 opacity-0 transition-all duration-400 ease-[cubic-bezier(0.37, 0, 0.63, 1)] ${
                  flipped == idx
                    ? "opacity-0"
                    : hoveredIndex == idx
                    ? "opacity-100 -translate-y-3"
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
              className="object-contain"
            />
            <div
              className={`absolute top-0 left-0 h-full w-full flex flex-col gap-2 justify-center items-start p-8 transition-all duration-200 ease-in-out ${
                flipped == idx
                  ? "rounded-xl opacity-100 rotate-y-180 "
                  : "opacity-0"
              }`}
            >
              <h2
                className={`text-2xl font-extrabold text-theme-accent3 select-none`}
              >
                {src.label}
              </h2>
              <p
                className={`text-wrap text-md text-theme-accent4 leading-snug font-normal tracking-normal select-none`}
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
