import Image from "next/image";
import React, { JSX } from "react";
import { useState } from "react";
import { Star } from "lucide-react";
import { useTheme } from "@/app/ThemeProvider";

type HobbiesCardProps = {
  index: number;
  tag: string;
  title: string;
  image: string;
  p: string;
  rating: number;
};

export default function HobbiesCard({
  index,
  tag,
  title,
  image,
  p,
  rating,
}: HobbiesCardProps): JSX.Element {
  const [isDescOpened, setIsDescOpened] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col boder-2">
      <div
        className={`${
          isDarkMode ? " text-white" : " text-black"
        } w-full flex justify-start items-center gap-4 rounded-lg p-4`}
      >
        <div className="relative flex w-[100px] h-[130px] overflow-hidden">
          <Image
            src={image}
            alt="hobbies pic"
            width={100}
            height={100}
            className="w-full h-full object-cover object-[50%_20%] rounded-md"
          />
        </div>

        <div className="flex flex-col w-full h-full">
          <h3
            className={`${
              isDarkMode ? "text-theme-accent1" : "text-[#4DA3FF]"
            } font-bold text-[16px] tracking-wide`}
          >
            {title}
          </h3>

          <div className="mt-4 flex justify-start items-center gap-4 text-[10px]">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#383537] py-1 px-1.5 text-theme1-secondary text-[10px]">
              <Star className="w-3 h-3 flex-shrink-0 fill-theme1-secondary" />
              <span className="leading-none">{rating}</span>
            </span>

            <span>{tag}</span>
          </div>

          <div className="mt-2 text-[11px] font-thin">
            <span
              className={`${
                isDescOpened ? "line-clamp-none" : "line-clamp-3"
              } ${isDarkMode ? "text-gray-300" : "text-theme-dark-accent1"}`}
            >
              {p}
            </span>
            <button
              onClick={() => setIsDescOpened(!isDescOpened)}
              className={`${
                isDarkMode ? "text-yellow-200" : "text-[#4DA3FF]"
              } mt-1 `}
            >
              {isDescOpened ? "See less" : "See more"}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${
          index === 3 ? "hidden" : ""
        } w-full h-[1px] rounded-lg bg-theme1-secondary/10`}
      />
    </div>
  );
}
