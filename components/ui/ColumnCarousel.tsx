"use client";

import React from "react";
import Image from "next/image";
import { useTheme } from "@/app/ThemeProvider";

type ColumnCarouselProps = {
  image: string;
  direction: "up" | "down";
  inView: boolean;
  active: boolean;
  title: string;
  desc: string;
};

export default function ColumnCarousel({
  image,
  direction,
  inView,
  active,
  title,
  desc,
}: ColumnCarouselProps) {
  const { isDarkMode, toggleTheme } = useTheme();

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
            background: isDarkMode
              ? "linear-gradient(260deg, rgba(85,55,105,0.4), rgba(254,194,181,0.25))"
              : "linear-gradient(260deg, rgba(233,241,250,0.4), rgba(10,10,10,0.25)",
          }}
        />
        <Image
          alt="img"
          src={image}
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 flex flex-col w-full h-full justify-between p-4">
          <div className="relative left-10 w-[75px] h-fit px-2 py-4 place-self-end rounded-lg border border-white/20 bg-gray-800">
            <h3
              className="text-lg text-theme1-secondary font-bold tracking-widest [writing-mode:vertical-rl]"
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.92)" }}
            >
              {title}
            </h3>
          </div>

          <div className="w-full rounded-lg bg-[linear-gradient(to_right,transparent_0%,rgba(10,10,10,0.45)_40%,rgba(10,10,10,0.45)_60%,transparent_100%)]">
            <p className="text-left text-sm text-theme1-secondary font-medium leading-snug pl-2 ">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
