"use client";

import { motion, Variants } from "framer-motion";
import ColumnCarousel from "./ui/ColumnCarousel";
import { useInView } from "react-intersection-observer";

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

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="w-full h-full flex gap-2 p-2">
      <p>hello</p>
    </div>
  );
}
