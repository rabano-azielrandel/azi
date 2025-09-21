"use client";

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
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {colors.map((c, i) => (
            <div
              key={i}
              className={`w-full flex-shrink-0 h-56 flex items-center justify-center ${c} rounded-lg mx-2`}
            >
              <p className="text-white text-xl font-bold">Box {i + 1}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Text description (20%) */}
      <div className="w-full h-1/5 flex items-center justify-center p-4">
        <p className="text-center font-semibold">Showing box {index + 1}</p>
      </div>
    </div>
  );
}
