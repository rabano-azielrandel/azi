// Hobbies.jsx

"use client"; // Required for hooks in Next.js App Router

import React from "react";
import { useInView } from "react-intersection-observer";
import ColumnCarousel from "./ui/ColumnCarousel";

const hobbies = [
  [
    "/images/col1-a.jpg",
    "/images/col1-b.jpg",
    "/images/col1-c.jpg",
    "/images/col1-d.jpg",
  ],
  [
    "/images/col2-a.jpg",
    "/images/col2-b.jpg",
    "/images/col2-c.jpg",
    "/images/col2-d.jpg",
  ],
  [
    "/images/col3-a.jpg",
    "/images/col3-b.jpg",
    "/images/col3-c.jpg",
    "/images/col3-d.jpg",
  ],
  [
    "/images/col4-a.jpg",
    "/images/col4-b.jpg",
    "/images/col4-c.jpg",
    "/images/col4-d.jpg",
  ],
  [
    "/images/col5-a.jpg",
    "/images/col5-b.jpg",
    "/images/col5-c.jpg",
    "/images/col5-d.jpg",
  ],
];

const Hobbies = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const calculateDelay = (index: number) => {};

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
        {hobbies.map((images, idx) => (
          <ColumnCarousel
            key={idx}
            images={images}
            direction={idx % 2 === 0 ? "down" : "up"}
            inView={inView}
          />
        ))}
      </div>
    </section>
  );
};

export default Hobbies;
