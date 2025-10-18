// Hobbies.jsx

"use client"; // Required for hooks in Next.js App Router

import React from "react";
import { useInView } from "react-intersection-observer";
import ColumnCarousel from "./ui/ColumnCarousel";

const hobby = [
  ["/images/hobby1.jpg"],
  ["/images/hobby2.jpg"],
  ["/images/hobby3.jpg"],
  ["/images/hobby4.jpg"],
];

const Hobbies = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.6,
  });

  return (
    <section
      ref={ref}
      id="hobbies"
      className="relative mt-8 flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div
        className="relative w-full max-w-[1360px] pt-20 pb-40 mx-auto gap-x-2 gap-y-4
      flex justify-center items-center"
      >
        {hobby.map((img, idx) => (
          <ColumnCarousel
            key={idx}
            image={img[0]}
            direction={idx % 2 === 0 ? "down" : "up"}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
