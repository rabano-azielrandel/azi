"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/ThemeProvider";

type FloatingTechStacksProps = {
  position: "left" | "right";
};

const FloatingTechStacks: React.FC<FloatingTechStacksProps> = ({
  position,
}) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => prev + 360 / techStacks.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`${
        position === "left" ? "-left-60" : "-right-60"
      } absolute w-full max-w-[400px] h-[40%] xl:h-[45%] 2xl:h-[50%] hidden lg:flex items-center justify-center`}
    >
      <div
        className="absolute w-full h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        {techStacks.map((tech, index) => (
          <div
            key={tech.name + index}
            className="absolute inset-0 flex justify-center"
            style={{
              transform: `rotate(${
                (360 / techStacks.length) * index
              }deg) translateY(-120px)`, // change the traslate Y to compress items
            }}
          >
            <img
              src={tech.src}
              alt={tech.name}
              className={`w-20 xl:w-21 2xl:w-22 h-20 xl:h-21 2xl:h-22 rounded-xl p-4 ${
                isDarkMode ? "bg-[#352222] grayscale-[50%]" : "bg-[#F8F9ED]"
              } drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] 
              hover:scale-125 transition-transform duration-200 border border-white/20`}
              style={{
                transform: `rotate(-${
                  (360 / techStacks.length) * index + rotation
                }deg)`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FloatingTechStacks;

const techStacks = [
  {
    name: "Docker",
    src: "https://cdn.simpleicons.org/docker/1D63ED",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TailwindCSS",
    src: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "C#",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  },
  {
    name: "MySQL",
    src: "https://cdn.simpleicons.org/mysql",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "SQLServer",
    src: "https://cdn.jsdelivr.net/npm/simple-icons@v6/icons/microsoftsqlserver.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "Codewars",
    src: "https://cdn.simpleicons.org/codewars",
  },
];
