"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const colors = ["bg-red-400/10", "bg-blue-400/10", "bg-yellow-400/10"];

export default function SplitCard() {
  const [index, setIndex] = useState(0);

  // Auto-loop every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col rounded-xl p-2 gap-4 cursor-pointer hover:bg-theme1-secondary/10 transition-colors">
      {/* Text description */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center py-4 gap-1">
        <h2 className="text-lg font-extrabold text-theme-accent3 leading-tight tracking-wider">
          FILENGGWAHE
        </h2>
        <p className="text-xs text-theme-accent4 leading-snug font-normal tracking-normal">
          A cursive writing assistant using ANN & NLP.
        </p>
      </div>

      {/* Carousel*/}
      <div className="w-full h-4/5 flex items-center justify-center relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(calc(-${index * 80}% + 4%))` }}
        >
          {colors.map((c, i) => (
            <div
              key={i}
              className={`w-[80%] h-56 flex-shrink-0 flex items-center justify-center ${c} rounded-lg mx-2`}
            >
              <Image
                src={`/images/project-thesis-${i + 1}.png`}
                alt={`Image ${i + 1}`}
                width={200}
                height={200}
                className="object-contain rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Stacks */}
      <div className="w-full flex gap-2 text-xs font-bold">
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          C#
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          JS
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          SQL
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          .NET
        </span>
      </div>
    </div>
  );
}
