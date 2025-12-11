"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

type DataInterface = {
  backgroundImage: string;
  label: string;
  p: string;
};

interface ExpCardProps {
  data: DataInterface[];
}

const ExpSplitCard = ({ data }: ExpCardProps) => {
  const [clicked, setClicked] = useState<number | null>(null);

  const { ref: fadeUpRef, style: fadeUpStyle } = useInViewAnimation("down", {
    threshold: 0.3,
    distance: 50,
  });

  const { ref: fadeUpRef1, style: fadeUpStyle1 } = useInViewAnimation("up", {
    threshold: 0.3,
    distance: 50,
  });

  return (
    <div className="w-full h-full px-4">
      <div
        className={`w-full h-full flex flex-col lg:flex-row justify-between items-center transition-300 gap-4 lg:hover:gap-6 lg:gap-0 rounded-lg group`}
      >
        {/* cards */}
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setClicked(index == clicked ? null : index)}
            ref={index % 2 == 0 ? fadeUpRef1 : fadeUpRef}
            style={index % 2 == 0 ? fadeUpStyle1 : fadeUpStyle}
            className="relative px-4 py-6 flex w-full h-[360px] lg:h-[500px] lg:group-hover:rounded-lg overflow-hidden"
          >
            <Image
              src={item.backgroundImage}
              alt="bg"
              width={600}
              height={600}
              className={`${
                clicked === index ? "scale-110" : "scale-100"
              } z-10 absolute top-0 left-0 object-cover w-full h-full transition-300 brightness-90`}
            />

            {/* content */}
            <div
              className={`${
                clicked === index ? "bg-white/5" : "bg-white/0"
              } w-full h-full  z-20 p-4 rounded-lg transition-300`}
            >
              <div
                className={`${
                  clicked == index
                    ? "translate-y-0"
                    : "translate-y-60 lg:translate-y-90"
                } w-full h-fit flex flex-col gap-2 transition-300 pr-6`}
              >
                <h2 className="text-white text-[22px] font-bold tracking-[3px]">
                  {item.label}
                </h2>
                <p
                  className={`${
                    clicked === index ? "opacity-100" : "opacity-0"
                  } transition-300 text-theme1-secondary text-[14px] font-light leading-[170%]`}
                >
                  {item.p}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpSplitCard;
