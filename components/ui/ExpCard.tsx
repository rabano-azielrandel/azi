import React from "react";
import Image from "next/image";

type DataInterface = {
  label: string;
  p: string;
};

interface ExpCardProps {
  data: DataInterface;
  index: number;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function ExpCard({
  data,
  index,
  activeIndex,
  setActiveIndex,
}: ExpCardProps) {
  return (
    <div
      onClick={() => setActiveIndex(index)}
      className={`
        ${
          activeIndex === index
            ? "bg-[#18161B]/40 min-w-[40%] items-start"
            : "items-center"
        } 
         ${index !== activeIndex && "min-w-[30%]"} 
        flex flex-col justify-center  px-8 w-full min-w-[0%] text-white group transition-normal ease-in-out duration-200 cursor-pointer overflow-hidden`}
    >
      <Image
        height={800}
        width={800}
        src="/images/plus.png"
        alt="plus"
        className={`
            absolute w-[20px] h-auto invert transition-all duration-200 ease-in-out
            ${
              activeIndex === index
                ? "opacity-0"
                : "opacity-0 group-hover:opacity-100 group-hover:relative"
            }
        `}
      />

      <p
        className={`text-2xl font-extrabold text-theme-accent3`}
        style={{
          textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
        }}
      >
        {data.label}
      </p>
      <p
        className={`${
          activeIndex === index ? "block" : "hidden"
        } text-wrap text-theme1-secondary transtion-a transition-discrete ease-in-out duration-200`}
      >
        {data.p}
      </p>
    </div>
  );
}
