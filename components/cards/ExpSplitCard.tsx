"use client";

import React, { useEffect, useState } from "react";
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

  // for show in animations
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const thresholdValue = isMobile ? 0.2 : 0.8;
  const distanceValue = isMobile ? 30 : 100;

  // 2. Initialize hooks (these will now re-run correctly when state updates)
  const { ref: fadeUpRef1, style: fadeUpStyle1 } = useInViewAnimation("right", {
    threshold: thresholdValue,
    distance: distanceValue,
  });

  const { ref: fadeUpRef2, style: fadeUpStyle2 } = useInViewAnimation("down", {
    threshold: thresholdValue,
    distance: distanceValue,
  });

  const { ref: fadeUpRef3, style: fadeUpStyle3 } = useInViewAnimation("left", {
    threshold: thresholdValue,
    distance: distanceValue,
  });

  const { ref: fadeUpRef4, style: fadeUpStyle4 } = useInViewAnimation("up", {
    threshold: thresholdValue,
    distance: distanceValue,
  });

  return (
    <div className="w-full h-full px-4">
      <div
        ref={isMobile ? fadeUpRef1 : undefined}
        style={isMobile ? fadeUpStyle1 : undefined}
        className={`w-full h-full flex flex-col lg:flex-row justify-between items-center transition-300 gap-4 lg:hover:gap-6 lg:gap-0 rounded-lg group`}
      >
        {/* cards */}
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setClicked(index == clicked ? null : index)}
            ref={
              isMobile ? undefined : index % 2 == 0 ? fadeUpRef2 : fadeUpRef4
            }
            style={
              isMobile
                ? undefined
                : index % 2 == 0
                  ? fadeUpStyle2
                  : fadeUpStyle4
            }
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
