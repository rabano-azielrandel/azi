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

  /** Handle drag start */
  const handleOnDown = (clientX: number) => {
    mouseDownAtRef.current = clientX;
  };

  /** Handle drag end */
  const handleOnUp = () => {
    mouseDownAtRef.current = 0;
    prevPercentageRef.current = percentageRef.current;
  };

  /** Handle drag move */
  const handleOnMove = (clientX: number) => {
    if (!trackRef.current || mouseDownAtRef.current === 0) return;

    const mouseDelta = mouseDownAtRef.current - clientX;
    const maxDelta = window.innerWidth / 2;

    const percentage = (mouseDelta / maxDelta) * -100;
    const nextPercentageUnconstrained = prevPercentageRef.current + percentage;
    const nextPercentage = Math.max(
      Math.min(nextPercentageUnconstrained, 0),
      -100
    );
    percentageRef.current = nextPercentage;

    // smooth slide
    trackRef.current.style.transition = "transform 0.3s ease-out";
    trackRef.current.style.transform = `translateX(${nextPercentage}%)`;

    setObjectPosition(`${100 + nextPercentage}% center`);
  };

  useEffect(() => {
    // Mouse
    const mouseDown = (e: MouseEvent) => handleOnDown(e.clientX);
    const mouseMove = (e: MouseEvent) => handleOnMove(e.clientX);
    const mouseUp = () => handleOnUp();

    // Touch
    const touchStart = (e: TouchEvent) => handleOnDown(e.touches[0].clientX);
    const touchMove = (e: TouchEvent) => handleOnMove(e.touches[0].clientX);
    const touchEnd = () => handleOnUp();

    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseup", mouseUp);

    window.addEventListener("touchstart", touchStart);
    window.addEventListener("touchmove", touchMove);
    window.addEventListener("touchend", touchEnd);

    return () => {
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseup", mouseUp);

      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
    };
  }, []);

  /** Image click = set active */
  const handleImageClick = (
    e: React.MouseEvent<HTMLDivElement>,
    src: string
  ) => {
    e.stopPropagation();
    setActiveImage(src === activeImage ? null : src);
  };

  /** Background click = reset */
  const handleBackgroundClick = () => {
    setActiveImage(null);
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
        className={`absolute flex gap-[2vmin] w-max select-none transition-all duration-500 ${
          activeImage
            ? "bottom-4 left-1/2 -translate-x-1/2 -translate-y-0"
            : "top-1/2 left-1/2 -translate-y-1/2"
        }`}
      >
        {images.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              imageRefs.current[index] = el;
            }}
            onClick={(e) => handleImageClick(e, src)}
            className={`relative cursor-pointer transition-all duration-500 overflow-hidden ${
              activeImage ? "w-[10vmin] h-[14vmin]" : "w-[40vmin] h-[56vmin]"
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
