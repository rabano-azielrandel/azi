"use client";

import SplitCard from "./cards/SplitCard";
import RippleCard from "./cards/RippleCard";
import FanCard from "./cards/FanCard";
import DiceCard from "./cards/DiceCard";
import Bot from "./ui/Bot";
import Wave from "./ui/Wave";
import { useInViewAnimation } from "../hooks/useInViewAnimation";
import { useEffect, useState } from "react";

const data = [
  {
    id: 0,
    span: 2, // BOT occupies 2 columns
    className: "hidden lg:block",
    render: () => <Bot />,
  },
  {
    id: 1,
    render: () => (
      <DiceCard
        title="DIGITAL PAYSLIP"
        desc="Digitalize traditional payslip."
      />
    ),
  },
  {
    id: 2,
    render: () => <SplitCard />,
  },
  {
    id: 3,
    render: () => (
      <RippleCard
        title="RESORT MANAGEMENT"
        desc="Streamline reservations, billing, and staff managemnt."
      />
    ),
  },
  {
    id: 4,
    render: () => (
      <FanCard
        title="TRUCK SCALE"
        desc="Data logging and receipt management."
      />
    ),
  },
];

export default function Projects() {
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

  const { ref: fadeUpRef4, style: fadeUpStyle4 } = useInViewAnimation("down", {
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

        <div className="w-full gap-6 flex lg:flex-col overflow-x-scroll pb-2 lg:pb-0 lg:overflow-hidden">
          <div className="w-full gap-6 flex lg:flex-col overflow-x-scroll pb-2 lg:pb-0 lg:overflow-hidden">
            {/* TOP DIV */}
            <div
              key={isMobile ? "mobile-slider" : "desktop-slider"}
              ref={isMobile ? fadeUpRef2 : fadeUpRef1}
              style={isMobile ? fadeUpStyle2 : fadeUpStyle1}
              className="w-full h-full flex gap-6"
            >
              {/* BOT */}
              <div
                className={`hidden lg:block  w-full lg:w-[67%] h-auto rounded-xl p-4 border-1 bg-[#18161B] border-white/30 
                light:bg-[#dce6f0] light:border-black/30`}
              >
                <Bot />
              </div>

              {/* DIGITAL PAYSLIP */}
              <div
                className={`w-full min-w-[340px] lg:w-[33%] h-[355px] lg:h-auto rounded-xl p-4 border-1 bg-[#18161B] border-white/30
                light:bg-[#dce6f0] light:border-black/30`}
              >
                <DiceCard
                  title="DIGITAL PAYSLIP"
                  desc="Digitalize traditional payslip."
                />
              </div>
            </div>

            {/* BOTTOM DIV */}
            <div
              key={isMobile ? "mobile-slider1" : "desktop-slider1"}
              ref={isMobile ? fadeUpRef4 : fadeUpRef3}
              style={isMobile ? fadeUpStyle4 : fadeUpStyle3}
              className="w-full h-full flex gap-6"
            >
              {/* THESIS */}
              <div
                className={`w-full min-w-[340px] h-[355px] lg:h-auto rounded-xl p-4 border-1 bg-[#18161B] border-white/30 light:bg-[#dce6f0] light:border-black/30`}
              >
                <SplitCard />
              </div>

              {/* RESORT MANAGEMENT */}
              <div
                className={`w-full min-w-[340px] h-[355px] lg:h-auto  rounded-xl p-4 border-1 bg-[#18161B] border-white/30 light:bg-[#dce6f0] light:border-black/30`}
              >
                <RippleCard
                  title="RESORT MANAGEMENT"
                  desc="Streamline reservations, billing, and staff managemnt."
                />
              </div>

              {/* TRUCK SCALE */}
              <div
                className={`w-full min-w-[340px] h-[355px] lg:h-auto  rounded-xl p-4 border-1 bg-[#18161B] border-white/30 light:bg-[#dce6f0]  light:border-black/30`}
              >
                <FanCard
                  title="TRUCK SCALE"
                  desc="Data logging and receipt management."
                />
              </div>
            </div>
          </div>

          {/* <div
            className="
              grid grid-cols-1 
              lg:grid-cols-3 
              gap-6
            "
          >
            {data?.map((item, index) => (
              <div
                key={
                  isMobile ? "mobile-slider" + index : "desktop-slider" + index
                }
                ref={
                  isMobile ? fadeUpRef2 : index >= 2 ? fadeUpRef3 : fadeUpRef1
                }
                style={
                  isMobile
                    ? fadeUpStyle2
                    : index >= 2
                      ? fadeUpStyle3
                      : fadeUpStyle2
                }
                className={`
                ${item.span === 2 ? "lg:col-span-2" : "lg:col-span-1"}
                ${`w-full min-w-[340px] h-[355px] lg:h-auto rounded-xl p-4 border-1 bg-[#18161B] border-white/30 light:bg-[#dce6f0] light:border-black/30 ${item.className ?? ""}`}
              `}
              >
                {item.render()}
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}
