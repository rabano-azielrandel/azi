import React from "react";
import Image from "next/image";
import { Ripple } from "./shadcn-io/ripple";

type RegCardProps = {
  image: string;
  title: string;
  desc: string;
  effect?: "expand" | "blur" | "ripple";
};

export default function RegCard({
  image,
  title,
  desc,
  effect = "expand",
}: RegCardProps) {
  // Define effect styles
  const effectClasses = {
    expand: "transition-transform duration-300 hover:scale-105",
    blur: "transition duration-300 hover:blur-sm",
    ripple: "", // handled via CSS
  };

  return (
    <main className="w-full h-full rounded-xl p-4 flex flex-col">
      {/* Image wrapper */}
      <div className="w-full h-4/5 flex justify-center items-center">
        <div
          className={`w-[80%] h-56 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden relative 
            ${effectClasses[effect]} ${effect === "ripple" && "bg-[#F6F6F6] "}`}
        >
          <Image
            src={`/images/${image}`}
            alt={title}
            width={200}
            height={200}
            className="object-contain rounded-lg"
          />

          {/* Only render ripple when chosen */}
          {effect === "ripple" && (
            <Ripple
              mainCircleSize={200}
              mainCircleOpacity={0.2}
              numCircles={6}
            />
          )}
        </div>
      </div>

      {/* Text section */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center py-4">
        <h1 className="text-lg font-bold text-white leading-tight">{title}</h1>
        <p className="text-sm text-gray-200 leading-snug">{desc}</p>
      </div>
    </main>
  );
}
