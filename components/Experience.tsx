"use client";

import { useState } from "react";
import Image from "next/image";

const exp = [
  { img: "/images/INTERN.jpg", title: "INTERN", desc: "test" },
  { img: "/images/FREELANCE.jpg", title: "FREELANCE", desc: "test" },
  { img: "/images/CORPORATE.jpg", title: "CORPORATE", desc: "test" },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section
      id="experience"
      className="relative mt-8 flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div
        className="relative w-full max-w-[1360px] h-full pt-20 pb-40 mx-auto gap-x-2 gap-y-4
      flex justify-center items-center overflow-hidden"
      >
        <div className="w-full h-full flex justify-center items-center">
          {exp.map((src, idx) => (
            <div
              key={idx}
              className={`w-full h-full overflow-hidden relative transition-all duration-500 ease-in-out ${
                activeIndex === idx ? "flex-[3]" : "flex-1"
              }`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              {/* Image */}
              <Image
                alt="img"
                src={src.img}
                width={900}
                height={900}
                className={`h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  activeIndex === idx
                    ? "scale-105 brightness-100 blur-0"
                    : "scale-100 brightness-75 blur-[2px]"
                }`}
              />
              {/* Text */}
              <div
                className={`absolute inset-0 flex flex-col items-center justify-center text-theme1-secondary px-4 transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${
                  activeIndex === idx
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
              >
                <h2 className="text-4xl font-bold drop-shadow-lg">
                  {src.title}
                </h2>
                <p className="mt-2 text-lg font-medium max-w-md">{src.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
