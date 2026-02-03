"use client";

import SplitCard from "./cards/SplitCard";
import RippleCard from "./cards/RippleCard";
import FanCard from "./cards/FanCard";
import DiceCard from "./cards/DiceCard";
import Bot from "./ui/Bot";
import Wave from "./ui/Wave";

import { ProjectCardData } from "@/types/Projects";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { JSX, useEffect, useState, useMemo } from "react";

interface ProjectProps {
  rows: ProjectCardData[][];
}

type CardItem = {
  id: string;
  span?: 1 | 2;
  className?: string;
  variant: string;
  render: () => JSX.Element;
};

function renderByVariant(item: ProjectCardData): JSX.Element {
  switch (item.variant) {
    case "bot":
      return <Bot />;

    case "dice":
      return <DiceCard title={item.title!} desc={item.desc!} />;

    case "split":
      return <SplitCard />;

    case "ripple":
      return <RippleCard title={item.title!} desc={item.desc!} />;

    case "fan":
      return <FanCard title={item.title!} desc={item.desc!} />;

    default:
      return <></>;
  }
}

export default function Projects({ rows }: ProjectProps) {
  const data: CardItem[][] = useMemo(() => {
    return rows.map((row) =>
      row.map((item) => ({
        id: item.id,
        span: item.span === 2 ? 2 : item.span === 1 ? 1 : undefined,
        className: item.className,
        variant: item.variant,
        render: () => renderByVariant(item),
      })),
    );
  }, [rows]);

  console.log(data);

  const [isCollapse, setIsCollapse] = useState(false);
  const VISIBILE_ROWS = isCollapse ? data.length : 2;

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

  const thresholdValue = isMobile ? 0.3 : 0.8;
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
    <section
      id="projects"
      className={`relative mt-10 sm:mt-40 w-full px-4 py-20 bg-gradient-to-b from-theme-accent2
        light:bg-gradient-to-b light:from-[#e9f1fa] light:to-[#F6F6F6]/10 -scroll-m-26`}
    >
      {/* Wave */}
      <Wave
        className="absolute -top-18 xxs:-top-20 xs:-top-24 2xs:-top-30 
        sm:-top-36 md:-top-42 2md:-top-46 3md:-top-50 
        lg:-top-58 2lg:-top-60 xl:-top-70 2xl:-top-76 3xl:-top-80 4xl:-top-85 8xl:-top-90
        left-0 w-full h-auto"
      />

      {/* Content */}
      <div
        className="relative w-full max-w-[1360px] pt-20 mx-auto gap-x-2 gap-y-8 lg:gap-y-4
          flex flex-col justify-center items-center"
      >
        <h2
          className={`block lg:hidden text-4xl font-oswald font-semibold text-center tracking-[8px] 
            text-theme1-secondary light:text-theme1-base select-none cursor-default`}
        >
          PROJECTS
        </h2>

        <div className="w-full gap-6 flex lg:flex-col pb-2 lg:pb-0">
          <div
            key={isMobile ? "mobile-slider1" : "desktop-slider1"}
            ref={isMobile ? fadeUpRef2 : undefined}
            style={isMobile ? fadeUpStyle2 : undefined}
            className="flex gap-6 overflow-x-scroll no-scrollbar lg:flex-col"
          >
            {data.slice(0, VISIBILE_ROWS).map((row, rowIndex) => (
              <div
                key={`row-${rowIndex}`}
                ref={
                  isMobile
                    ? undefined
                    : rowIndex % 2 == 0
                      ? fadeUpRef1
                      : fadeUpRef3
                }
                style={
                  isMobile
                    ? undefined
                    : rowIndex % 2 == 0
                      ? fadeUpStyle1
                      : fadeUpStyle3
                }
                className="flex gap-6 shrink-0 lg:grid lg:grid-cols-3 lg:gap-6"
              >
                {row.map((item, colIndex) => (
                  <div
                    key={`card-${item.id}`}
                    className={`
                      shrink-0 w-[340px] h-[355px]
                      lg:w-full lg:h-auto
                      ${item.span === 2 ? "lg:col-span-2" : ""}
                      rounded-xl p-4
                      border-1 bg-[#18161B] border-white/30
                      light:bg-[#dce6f0] light:border-black/30
                      ${item.variant === "bot" ? "hidden lg:block" : ""}
                    `}
                  >
                    {item.render()}
                  </div>
                ))}
              </div>
            ))}

            {data.length > 2 && (
              <div className="hidden lg:flex w-full justify-center cursor-pointer hover:bg-[#f7f7f7] group">
                <button
                  onClick={() => setIsCollapse(!isCollapse)}
                  className="text-sm text-white cursor-pointer group-hover:text-black"
                >
                  {isCollapse ? "See Less ▲" : "See More ▼"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
