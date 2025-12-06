"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

type FloatingTechStacksProps = {
  position: "left" | "right";
};

const FloatingTechStacks: React.FC<FloatingTechStacksProps> = ({
  position,
}) => {
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
            <Image
              src={tech.src}
              alt={tech.name}
              className={`w-20 xl:w-21 2xl:w-22 h-20 xl:h-21 2xl:h-22 rounded-xl p-4 bg-[#352222] grayscale-[50%] light:bg-[#F8F9ED] 
                drop-shadow-[0_0_10px_rgba(0,0,0,0.8)] 
                hover:scale-125 transition-transform duration-200 border border-white/20`}
              width={100}
              height={100}
              style={{
                transform: `rotate(-${
                  (360 / techStacks.length) * index + rotation
                }deg)`,
              }}
              loading="lazy"
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
    src: "/hero/DOCKER.svg",
  },
  {
    name: "Next.js",
    src: "/hero/NEXT.svg",
  },
  {
    name: "TailwindCSS",
    src: "/hero/TAILWIND.svg",
  },
  {
    name: "TypeScript",
    src: "/hero/TS.svg",
  },
  {
    name: "HTML5",
    src: "/hero/HTML5.svg",
  },
  {
    name: "CSS3",
    src: "/hero/CSS.svg",
  },
  {
    name: "Java",
    src: "/hero/JAVA.svg",
  },
  {
    name: "C#",
    src: "/hero/DOTNET.svg",
  },
  {
    name: "MySQL",
    src: "/hero/MYSQL.svg",
  },
  {
    name: "Git",
    src: "/hero/GIT.svg",
  },
  {
    name: "SQLServer",
    src: "/hero/SQLSERVER.svg",
  },
  {
    name: "Python",
    src: "/hero/PYTHON.svg",
  },
];
