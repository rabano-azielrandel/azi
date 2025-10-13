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
    <div className="w-full h-full flex flex-col gap-2 overflow-hidden">
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
            className={`relative w-full h-[200px] overflow-hidden rounded-lg group ${
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
            <div
              aria-hidden
              className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(260deg, rgba(85,55,105,0.4), rgba(254,194,181,0.25));",
              }}
            />
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
