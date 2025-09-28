"use client";

import React, { useRef, useEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1674&q=80",
  "https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
  "https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80",
];

export default function SlideTrackingCard() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const [activeImage, setActiveImage] = useState<string | null>(null);

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

    imageRefs.current.forEach((img) => {
      if (img) img.style.objectPosition = `${100 + nextPercentage}% center`;
    });
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
    e: React.MouseEvent<HTMLImageElement>,
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
        className={`absolute flex gap-[2vmin] w-max select-none transition-all duration-500 ${
          activeImage
            ? "bottom-4 left-1/2 -translate-x-1/2 -translate-y-0" // move to bottom
            : "top-1/2 left-1/2 -translate-y-1/2" // center
        }`}
      >
        {images.map((src, index) => (
          <img
            key={index}
            ref={(el: HTMLImageElement | null): void => {
              imageRefs.current[index] = el;
            }}
            src={src}
            alt={`Image ${index + 1}`}
            draggable={false}
            onClick={(e) => handleImageClick(e, src)}
            className={`object-cover cursor-pointer transition-all duration-500 ${
              activeImage
                ? "w-[10vmin] h-[14vmin]" // shrink cards
                : "w-[40vmin] h-[56vmin]" // normal size
            } ${activeImage === src ? "scale-105 shadow-lg" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
