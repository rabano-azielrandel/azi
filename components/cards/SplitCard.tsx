"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  { color: "bg-red-400/10", img: 1 },
  { color: "bg-blue-400/10", img: 2 },
  { color: "bg-yellow-400/10", img: 3 },
];

const renderedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function SplitCard() {
  const [index, setIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    const startInterval = () =>
      setInterval(() => {
        setIndex((prev) => prev + 1);
      }, 2000);

    let interval = startInterval();

    const handleVisibility = () => {
      if (document.hidden) {
        clearInterval(interval);
      } else {
        interval = startInterval();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (!transitionEnabled) {
      requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
    }
  }, [transitionEnabled]);

  const handleTransition = () => {
    // fake start at end
    if (index == renderedSlides.length - 1) {
      setTransitionEnabled(false);
      setIndex(1);
    }

    // fake end at start
    if (index == 0) {
      setTransitionEnabled(false);
      setIndex(renderedSlides.length - 2);
    }
  };

  return (
    <div
      className={`w-full h-full flex flex-col rounded-xl p-2 gap-4 cursor-pointer transition-colors hover:bg-theme1-secondary/10 light:hover:bg-[#0f1f2e]/10`}
    >
      {/* Text description */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center py-4 gap-1">
        <h2
          className={`text-lg font-extrabold text-theme-accent3 light:text-theme-dark-accent1 leading-tight tracking-wider`}
        >
          FILENGGWAHE
        </h2>
        <p
          className={`text-xs text-theme-accent4 light:text-theme-dark-accent2 leading-snug font-normal tracking-normal`}
        >
          A cursive writing assistant using ANN & NLP.
        </p>
      </div>

      {/* Carousel*/}
      <div className="w-full h-4/5 flex items-center justify-center relative overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(calc(-${index * 84}%))`,
            transition: transitionEnabled
              ? "transform 0.7s ease-in-out"
              : "none",
          }}
          onTransitionEnd={handleTransition}
        >
          {renderedSlides.map(({ color, img }, i) => (
            <div
              key={i}
              className={`w-[80%] h-56 flex-shrink-0 flex items-center justify-center ${color} rounded-lg mx-2`}
            >
              <Image
                src={`/images/project-thesis-${img}.png`}
                alt={`Image ${img}`}
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
