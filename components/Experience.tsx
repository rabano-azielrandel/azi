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
      id="hobbies"
      className="relative mt-8 flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div
        className="relative w-full max-w-[1360px] h-full pt-20 pb-40 mx-auto gap-x-2 gap-y-4
      flex justify-center items-center overflow-hidden"
      >
        <div className="w-full h-full flex justify-center items-center gap-2 bg-orange-400">
          {exp.map((src, idx) => (
            <div
              key={idx}
              className={`w-full h-full overflow-hidden transition-all duration-500 ease-in-out ${
                activeIndex === idx ? "flex-[3]" : "flex-1"
              }`}
              onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
            >
              <Image
                alt="img"
                src={src.img}
                width={900}
                height={900}
                className={`h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                  activeIndex === idx
                    ? "scale-105 brightness-100"
                    : "scale-100 brightness-75 blur-[2px]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
