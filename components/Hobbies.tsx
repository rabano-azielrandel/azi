"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import ColumnCarousel from "./ui/ColumnCarousel";
import Image from "next/image";
import { useTheme } from "@/app/ThemeProvider";

const hobbySets = {
  anime: [
    "/images/anime1.jpg",
    "/images/anime2.jpg",
    "/images/anime3.jpg",
    "/images/anime4.jpg",
  ],
  music: [
    "/images/music1.jpg",
    "/images/music2.jpg",
    "/images/music3.jpg",
    "/images/music4.jpg",
  ],
  programming: [
    "/images/code1.jpg",
    "/images/code2.jpg",
    "/images/code3.jpg",
    "/images/code4.jpg",
  ],
  game: [
    "/images/game1.jpg",
    "/images/game2.jpg",
    "/images/game3.jpg",
    "/images/game5.jpg",
  ],
};

const icons = [
  "/images/anime-icon.png",
  "/images/music-icon.png",
  "/images/coding-icon.png",
  "/images/games-icon.png",
];

const categories = Object.keys(hobbySets) as (keyof typeof hobbySets)[];

const Hobbies = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  const { isDarkMode, toggleTheme } = useTheme();
  const [index, setIndex] = useState(0);
  const category = categories[index];

  const handleNext = () => setIndex((prev) => (prev + 1) % categories.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + categories.length) % categories.length);

  return (
    <section
      ref={ref}
      id="hobbies"
      className={`relative mt-8 flex h-screen w-full items-center justify-center overflow-hidden ${
        isDarkMode ? "" : ""
      }`}
    >
      <div
        className="relative w-full max-w-[1360px] p-2 gap-4
      flex flex-col justify-center items-center overflow-hidden"
      >
        <h2 className="text-4xl font-oswald font-semibold text-theme1-secondary text-center">
          Between Logic and Art
        </h2>
        {/* Labels */}
        <div className="w-full flex items-center justify-between px-10 transition-opacity duration-500">
          {/* Category Text (Left Side) */}
          <h2 className="text-theme1-secondary text-xl font-semibold">
            {category === "anime"
              ? "Stories That Echo"
              : category === "music"
              ? "Sounds That Burn"
              : category === "programming"
              ? "Lines That Build"
              : "Realms I Wander"}
          </h2>

          {/* Category Icons (Right Side) */}
          <div className="flex items-center gap-3">
            {icons.map((icon, i) => (
              <Image
                key={i}
                alt={`icon-${i}`}
                src={icon}
                width={48}
                height={48}
                onClick={() => setIndex(i)}
                className={`w-12 h-12 object-cover rounded-full border border-white/30 cursor-pointer 
                transition-all duration-300 
                hover:scale-110 
                ${
                  i === index
                    ? "scale-110 border-white filter invert-[93%] sepia-[11%] saturate-[234%] hue-rotate-[323deg] brightness-[100%] contrast-[90%]"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="w-full flex justify-center items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-fit hover:scale-185 cursor-pointer"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>
          <div className="relative w-full flex items-center p-2 gap-1 bg-white/3 border-1 border-white/30 rounded-2xl">
            {hobbySets[category].map((img, idx) => (
              <React.Fragment key={`${category}-${idx}`}>
                <ColumnCarousel
                  image={img}
                  direction={idx % 2 === 0 ? "down" : "up"}
                  inView={inView}
                  active
                />

                {/* Divider */}
                {idx < hobbySets[category].length - 1 && (
                  <div className="w-[8px] h-[500px] bg-theme1-secondary/50 mx-2 rounded-full" />
                )}
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-fit hover:scale-185 cursor-pointer"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
