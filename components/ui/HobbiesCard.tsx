import Image from "next/image";
import React, { JSX } from "react";
import { useState } from "react";

type HobbiesCardProps = {
  index: number;
};

export default function HobbiesCard({ index }: HobbiesCardProps): JSX.Element {
  const [isDescOpened, setIsDescOpened] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-start items-start gap-4 rounded-lg p-4 text-white">
        <Image
          src={`/images/anime${index + 1}.jpg`}
          alt="hobbies pic"
          width={200}
          height={200}
          className="object-contain w-[100px] h-[100px] rounded-sm"
        />

        <div className="flex flex-col">
          <h3 className="font-bold text-[16px] tracking-wide text-theme-accent1">
            Designing Dashboards
          </h3>

          <div className="mt-4 flex justify-start items-center gap-4 text-[10px]">
            <span className="rounded-full bg-theme1-secondary py-[2px] px-2 text-theme-accent2">
              2020
            </span>
            <span>Dashboard</span>
          </div>

          <div className="mt-2 text-[11px] font-thin">
            <span
              className={`${isDescOpened ? "line-clamp-none" : "line-clamp-3"}`}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
              mollitia dicta ullam, cupiditate dignissimos atque nesciunt.
              Aliquam, voluptate, sapiente eum accusamus doloribus deserunt,
              accusantium ex soluta animi expedita tenetur eius?
            </span>
            <button
              onClick={() => setIsDescOpened(!isDescOpened)}
              className="mt-1 text-yellow-200"
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
