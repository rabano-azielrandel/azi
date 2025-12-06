"use client";

import React, { useEffect, useState } from "react";
import { Ripple } from "./shadcn-io/ripple";

type RippleCardProps = {
  title: string;
  desc: string;
};

const cards = [
  { text: "Seamless Booking System", color: "bg-theme-accent1" },
  { text: "Automated Reports", color: "bg-theme1-accent" },
  { text: "Smart Alerts", color: "bg-theme1-base" },
];

export default function RippleCard({ title, desc }: RippleCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`w-full h-full flex flex-col rounded-xl p-2 gap-4 cursor-pointer transition-colors hover:bg-theme1-secondary/10 light:hover:bg-[#0f1f2e]/10`}
    >
      {/* Text section */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center">
        <h3
          className={`text-lg text-nowrap font-extrabold text-theme-accent3 light:text-theme-dark-accent1 leading-tight tracking-wider`}
        >
          {title}
        </h3>
        <p
          className={`text-xs text-theme-accent4 light:text-theme-dark-accent2 leading-snug font-normal tracking-normal`}
        >
          {desc}
        </p>
      </div>

      <div className="w-full h-4/5 flex justify-center items-center relative overflow-hidden">
        {/* Ripple Effect */}
        <Ripple
          mainCircleSize={200}
          mainCircleOpacity={0.2}
          numCircles={6}
          className="bg-[#F6F6F6] rounded-xl"
        />

        {/* Stacked Cards */}
        <div className="w-[80%] h-56 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden">
          <div className="w-full h-[50%] relative">
            {cards.map((card, i) => {
              // Compute relative position (0 = front, 1 = middle, 2 = back)
              const position = (i - activeIndex + cards.length) % cards.length;

              return (
                <div
                  key={card.text}
                  className={`
                    absolute left-0 right-0 mx-auto
                    h-14 flex items-center px-4 gap-2
                    rounded-xl shadow-md bg-white
                    transition-all duration-700 ease-in-out
                  `}
                  style={{
                    top: `${position * 24}px`, // spacing between cards
                    width: `${100 - position * 10}%`, // shrink width as it goes back
                    zIndex: cards.length - position, // front card stays on top
                    transform: `scale(${1 - position * 0.1})`,
                    opacity: 1, // always visible
                  }}
                >
                  <div className={`w-8 h-8 rounded-lg ${card.color}`} />
                  <span className="text-sm font-medium text-gray-800">
                    {card.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stacks */}
      <div className="w-full flex gap-2 text-xs font-bold">
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px] rounded-full text-center`}
        >
          C#
        </span>
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px] rounded-full text-center`}
        >
          JS
        </span>
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px] rounded-full text-center`}
        >
          SQL
        </span>
        <span
          className={`w-[50px] text-theme1-secondary/80 bg-white/5 light:text-[#0A0A0A]/90 light:bg-[#1e2a3f]/5 py-[2px] rounded-full text-center`}
        >
          .NET
        </span>
      </div>
    </div>
  );
}
