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
    <main className="w-full h-full rounded-xl p-4 flex flex-col">
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

      {/* Text section */}
      <div className="w-full h-1/5 flex flex-col items-start justify-center py-4">
        <h1 className="text-lg font-bold text-white leading-tight">{title}</h1>
        <p className="text-sm text-gray-200 leading-snug">{desc}</p>
      </div>
    </main>
  );
}
