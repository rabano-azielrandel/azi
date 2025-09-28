"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

const images = [
  "/images/test1.jpg",
  "/images/test2.jpg",
  "/images/test3.jpg",
  "/images/test4.jpg",
  "/images/test5.jpg",
];
export default function SlideTrackingCard() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [objectPosition, setObjectPosition] = useState("100% center");

  const mouseDownAtRef = useRef<number>(0);
  const prevPercentageRef = useRef<number>(0);
  const percentageRef = useRef<number>(0);

  const handleOnDown = (e: MouseEvent) => {
    mouseDownAtRef.current = e.clientX;
  };

  const handleOnUp = () => {
    mouseDownAtRef.current = 0;
    prevPercentageRef.current = percentageRef.current;
  };

  const handleOnMove = (e: MouseEvent) => {
    if (!trackRef.current || mouseDownAtRef.current === 0) return;

    const mouseDelta = mouseDownAtRef.current - e.clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentageRef.current + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    percentageRef.current = nextPercentage;

    trackRef.current.style.transform = `translateX(${nextPercentage}%)`;

    // Instead of mutating <img>, update state → passed to Image as style
    setObjectPosition(`${100 + nextPercentage}% center`);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleOnDown);
    window.addEventListener("mousemove", handleOnMove);
    window.addEventListener("mouseup", handleOnUp);

    const handleTouchStart = (e: TouchEvent) =>
      handleOnDown(e.touches[0] as unknown as MouseEvent);
    const handleTouchMove = (e: TouchEvent) =>
      handleOnMove(e.touches[0] as unknown as MouseEvent);

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleOnUp);

    return () => {
      window.removeEventListener("mousedown", handleOnDown);
      window.removeEventListener("mousemove", handleOnMove);
      window.removeEventListener("mouseup", handleOnUp);

      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleOnUp);
    };
  }, []);

  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement>,
    src: string
  ) => {
    e.stopPropagation();
    setActiveImage(src === activeImage ? null : src); // toggle
  };

  const handleBackgroundClick = () => {
    setActiveImage(null); // reset all
  };

  return (
    <div
      className="w-screen h-screen m-0 overflow-hidden relative"
      style={{
        backgroundImage: activeImage ? `url(${activeImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={handleBackgroundClick}
    >
      {/* Image Track */}
      <div
        ref={trackRef}
        className={`absolute flex gap-[2vmin] w-max select-none 
            ${
              activeImage
                ? "bottom-4 left-1/2 -translate-x-1/2 -translate-y-0 transition-all duration-500"
                : "top-1/2 left-1/2 -translate-y-1/2 transition-all duration-500"
            }`}
        style={{
          transform: `translateX(${percentageRef.current}%)`, // drag transform applied instantly
          transition: mouseDownAtRef.current !== 0 ? "none" : undefined, // disable smoothness while dragging
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            onClick={(e) => handleImageClick(e, src)}
            className={`relative cursor-pointer transition-all duration-500 overflow-hidden ${
              activeImage
                ? "w-[10vmin] h-[14vmin]" // shrink cards
                : "w-[40vmin] h-[56vmin]" // normal size
            } ${activeImage === src ? "scale-105 shadow-lg" : ""}`}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill
              draggable={false}
              style={{ objectFit: "cover", objectPosition }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
