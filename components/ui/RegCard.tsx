import React from "react";
import Image from "next/image";

type RegCardProps = {
  image: string;
  title: string;
  desc: string;
  effect?: "expand" | "blur";
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
  };

  return (
    <div className="w-full h-full rounded-xl flex flex-col p-2 gap-4">
      {/* Text section */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center">
        <h2 className="text-lg font-extrabold text-theme-accent3 leading-tight tracking-wider">
          {title}
        </h2>
        <p className="text-xs text-theme-accent4 leading-snug font-normal tracking-normal">
          {desc}
        </p>
      </div>

      {/* Image wrapper */}
      <div className="w-full h-4/5 flex justify-center items-center">
        <div
          className={`w-[80%] h-56 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden relative 
            ${effectClasses[effect]} `}
        >
          <Image
            src={`/images/${image}`}
            alt={title}
            width={200}
            height={200}
            className="object-contain rounded-lg"
          />
        </div>
      </div>

      {/* Stacks */}
      <div className="w-full flex gap-4 text-xs font-bold">
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          C#
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          JS
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          SQL
        </span>
        <span className="w-[50px] text-theme1-secondary/80 py-[2px] bg-white/5 rounded-full text-center">
          .NET
        </span>
      </div>
    </div>
  );
}
