"use client";

import React, { useState } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import ColumnCarousel from "./ui/ColumnCarousel";
import HobbiesMobile from "./HobbiesMobile";
import Image from "next/image";
import { useTheme } from "@/app/ThemeProvider";
import HobbiesContentMobile from "./HobbiesContentMobile";
import { image } from "framer-motion/client";

const hobbySets = {
  anime: [
    {
      title: "SAKAMOTO DAYS",
      desc: "Nonstop action with fun, memorable characters.",
      image: "/images/anime1.jpg",
    },
    {
      title: "CHAINSAW MAN",
      desc: "Brutal, emotional, and powered by Makima’s presence.",
      image: "/images/anime2.jpg",
    },
    {
      title: "DEMON SLAYER",
      desc: "Shinobu’s resolve and poison plan inspire me.",
      image: "/images/anime3.jpg",
    },
    {
      title: "JUJUTSU KAISEN",
      desc: "Dark themes and Geto’s calm intensity stand out.",
      image: "/images/anime4.jpg",
    },
  ],
  music: [
    {
      title: "IV OF SPADES",
      desc: "Retro sound with unforgettable bass lines.",
      image: "/images/music1.jpg",
    },
    {
      title: "TWENTY ONE PILOTS",
      desc: "Unique style and deep, meaningful songs.",
      image: "/images/music2.jpg",
    },
    {
      title: "LiSA",
      desc: "Energetic anime songs with strong emotion.",
      image: "/images/music3.jpg",
    },
    {
      title: "IU",
      desc: "Soft vocals and heartfelt storytelling.",
      image: "/images/music4.jpg",
    },
  ],
  programming: [
    {
      title: "PROGRAMMING",
      desc: "Creative problem-solving through code.",
      image: "/images/code1.jpg",
    },
    {
      title: "DATA STRUCTURE",
      desc: "Logic, patterns, and efficient design.",
      image: "/images/code2.jpg",
    },
    {
      title: "ORGANIZING",
      desc: "Clear plans help me stay focused.",
      image: "/images/code3.jpg",
    },
    {
      title: "READING",
      desc: "Docs sharpen my coding skills.",
      image: "/images/code4.jpg",
    },
  ],
  game: [
    {
      title: "DELTA FORCE",
      desc: "Tactical missions with strong teamwork.",
      image: "/images/game1.jpg",
    },
    {
      title: "VALORANT",
      desc: "Strategic rounds with KAY/O as my pick.",
      image: "/images/game2.jpg",
    },
    {
      title: "NARAKA",
      desc: "Fast duels with Wu Chen’s mobility.",
      image: "/images/game3.jpg",
    },
    {
      title: "DOTA 2",
      desc: "Deep strategy—Windranger started my journey.",
      image: "/images/game5.jpg",
    },
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
      className={`relative mt-10 sm:mt-40 px-4 py-20 flex w-full items-center justify-center overflow-hidden bg-gradient-to-b from-transparent via-theme-accent2 to-theme-accent2`}
    >
      <div
        className="relative w-full max-w-[1360px] p-2 gap-10
      flex flex-col justify-center items-center overflow-hidden"
      >
        <h2
          className={`text-4xl font-oswald font-semibold text-center tracking-[8px] ${
            isDarkMode ? "text-theme1-secondary" : "text-theme1-base"
          } select-none cursor-default`}
        >
          HOBBIES
        </h2>

        {/* Labels */}
        <div className="w-full hidden lg:flex items-center justify-between px-10 transition-opacity duration-500">
          {/* Category Text (Left Side) */}
          <h2
            className={`${
              isDarkMode ? "text-theme1-secondary" : "text-theme1-base"
            } text-xl font-semibold`}
          >
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
                className={`w-12 h-12 object-cover rounded-full border cursor-pointer 
                  transition-all duration-300 hover:scale-110
                  ${
                    i === index
                      ? isDarkMode
                        ? "scale-110 border-white filter invert-[93%] sepia-[11%] saturate-[234%] hue-rotate-[323deg] brightness-[100%] contrast-[90%]"
                        : "scale-110 border-black"
                      : "border-white/30 opacity-60 hover:opacity-100"
                  }`}
              />
            ))}
          </div>
        </div>

        {/* Images for LG UP */}
        <div className="w-full hidden lg:flex justify-center items-center gap-2">
          <button
            onClick={handlePrev}
            className="w-fit hover:scale-185 cursor-pointer"
          >
            <ChevronLeft
              className={`w-8 h-8 ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            />
          </button>
          <div
            className={`relative w-full flex items-center p-2 gap-1 bg-white/3 rounded-2xl border-1  ${
              isDarkMode ? "border-white/30" : "border-gray-700"
            } `}
          >
            {hobbySets[category].map((item, index) => (
              <React.Fragment key={`${category}-${index}`}>
                <ColumnCarousel
                  image={item.image}
                  direction={index % 2 === 0 ? "down" : "up"}
                  inView={inView}
                  active
                  title={item.title}
                  desc={item.desc}
                />

                {/* Divider */}
                {index < hobbySets[category].length - 1 && (
                  <div
                    className={`w-[8px] h-[500px] mx-2 rounded-full ${
                      isDarkMode ? "bg-theme1-secondary/50" : "bg-theme1-base"
                    }`}
                  />
                )}
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="w-fit hover:scale-185 cursor-pointer"
          >
            <ChevronRight
              className={`w-8 h-8 ${
                isDarkMode ? "text-white" : "text-gray-700"
              }`}
            />
          </button>
        </div>

        <HobbiesContentMobile />
      </div>
    </section>
  );
};

export default Hobbies;
