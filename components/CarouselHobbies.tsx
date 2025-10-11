"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function CarouselHobbies() {
  return (
    <div className="w-full flex gap-2 overflow-hidden relative">
      {hobbies.map((col, colIdx) => (
        <div
          key={colIdx}
          className="w-full h-full flex flex-col items-center gap-2"
        >
          {col.map((images, imgIdx) => (
            <div
              key={imgIdx}
              className={`absolute ${
                imgIdx % 2 === 0
                  ? "animate-slideDown -top-[100px]"
                  : "animate-slideUp -bottom-[100px]"
              } w-full h-[200px] overflow-hidden`}
            >
              <Image alt="images" src={images} fill className="object-cover" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
