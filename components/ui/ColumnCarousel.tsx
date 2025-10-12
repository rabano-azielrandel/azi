import React from "react";
import Image from "next/image";

type ColumnCarouselProps = {
  images: string[];
  direction: "up" | "down";
};

export default function ColumnCarousel({
  images,
  direction,
}: ColumnCarouselProps) {
  return (
    <div className="w-full h-full flex flex-col gap-2 overflow-hidden bg-red-300">
      {images.map((img, idx) => (
        <div key={idx} className="relative w-full h-[200px] overflow-hidden">
          <Image
            alt="img"
            src={img}
            width={600}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
