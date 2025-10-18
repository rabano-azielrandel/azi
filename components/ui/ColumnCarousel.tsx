import React from "react";
import Image from "next/image";
import { animate } from "@tsparticles/engine";

type ColumnCarouselProps = {
  image: string;
  direction: "up" | "down";
  inView: boolean;
  active: boolean;
};

export default function ColumnCarousel({
  image,
  direction,
  inView,
  active,
}: ColumnCarouselProps) {
  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-hidden group">
      <div
        className={`relative w-full h-[600px] overflow-hidden rounded-lg ${
          inView || active
            ? direction === "up"
              ? "animate-slide-up"
              : "animate-slide-down"
            : ""
        }`}
      >
        <div
          aria-hidden
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 group-hover:opacity-0 pointer-events-none`}
          style={{
            background:
              "linear-gradient(260deg, rgba(85,55,105,0.4), rgba(254,194,181,0.25))",
          }}
        />
        <Image
          alt="img"
          src={image}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
