import React from "react";
import Image from "next/image";

type RegCardProps = {
  image: string;
  title: string;
  desc: string;
};

export default function RegCard({ image, title, desc }: RegCardProps) {
  return (
    <main className="w-full h-full rounded-xl p-4 flex flex-col">
      <div className="w-full h-4/5 flex justify-center items-center">
        <div
          className={`w-[80%] h-56 flex-shrink-0 flex items-center justify-center rounded-lg`}
        >
          <Image
            src={`/images/${image}`}
            alt={`Image ${image}`}
            width={200}
            height={200}
            className="object-contain rounded-lg"
          />
        </div>
      </div>
      <div className="w-full h-1/5 flex flex-col items-start justify-center py-4">
        <h1 className="text-lg font-bold text-white leading-tight">{title}</h1>
        <p className="text-sm text-gray-200 leading-snug">{desc}</p>
      </div>
    </main>
  );
}
