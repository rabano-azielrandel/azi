import React from "react";
import Image from "next/image";

type ColumnCarouselProps = {
  images: string[];
  direction: "up" | "down";
  inView: boolean;
};

export default function ColumnCarousel({
  images,
  direction,
  inView,
}: ColumnCarouselProps) {
  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-hidden bg-red-300">
      {images.map((img, idx) => {
        // compute delays for both directions

        const animationDelay =
          direction === "up"
            ? idx === 0
              ? "0ms"
              : `${1000 + (idx - 1) * 200}ms`
            : idx === images.length - 1
            ? "0ms"
            : `${1000 + (images.length - 2 - idx) * 200}ms`;

        return (
          <div
            key={idx}
            className={`relative w-full h-[200px] overflow-hidden ${
              inView && direction === "up"
                ? "animate-slide-in opacity-100"
                : inView && direction === "down"
                ? "animate-slide-out opacity-100"
                : ""
            }`}
            style={{
              transitionDelay: "0ms",
              animationDelay,
            }}
          >
            <Image
              alt="img"
              src={img}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
        );
      })}
    </div>
  );
}
