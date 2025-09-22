"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const colors = ["bg-red-400/10", "bg-blue-400/10", "bg-yellow-400/10"];

export default function SplitCarousel() {
  const [index, setIndex] = useState(0);

  // Auto-loop every 2s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full rounded-xl p-4 flex flex-col">
      {/* Carousel (80%) */}
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

      {/* Text description (20%) */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center py-4 ">
        <h1 className="text-lg font-bold text-white leading-tight">
          Filenggwahe
        </h1>
        <p className="text-sm text-gray-200 leading-snug">
          A cursive writing assistant using ANN & NLP.
        </p>
      </div>
    </div>
  );
}
