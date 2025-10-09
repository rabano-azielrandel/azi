import React from "react";
import SplitCard from "./ui/SplitCard";
import RippleCard from "./ui/RippleCard";
import FanCard from "./ui/FanCard";
import DiceCard from "./ui/DiceCard";
import RegCard from "./ui/RegCard";
import Bot from "./ui/Bot";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative mt-60 w-full pt-0 bg-gradient-to-b from-theme-accent2"
    >
      <Image
        src={"/images/wave.svg"}
        alt="wave"
        width={1920}
        height={500}
        className="absolute -top-[367px] left-0 object-contain w-fit h-auto"
      />

      <div
        className="relative w-full max-w-[1360px] pt-20 pb-40 mx-auto gap-x-2 gap-y-4
      flex flex-col justify-center items-center"
      >
        <div className="w-full h-full flex gap-4">
          <div className="w-[67%] h-auto rounded-xl bg-white/3 border-1 border-white/30 overflow-hidden">
            <Bot />
          </div>

          <div className="w-[33%] h-auto  rounded-xl p-4 bg-[#18161B] border-1 border-white/30">
            <DiceCard
              title="DIGITAL PAYSLIP"
              desc="Digitalize traditional payslip."
            />
          </div>
        </div>

        <div className="w-full h-full flex gap-4">
          <div className="w-full rounded-xl p-4 bg-[#18161B]  border-1 border-white/30">
            <SplitCard />
          </div>

          <div className="w-full rounded-xl p-4 bg-[#18161B] border-1 border-white/30">
            <RippleCard
              image="project-resort-management.jpg"
              title="RESORT MANAGEMENT"
              desc="Streamline reservations, billing, and staff managemnt."
            />
          </div>

          <div className="w-full rounded-xl p-4 bg-[#18161B] border-1 border-white/30">
            <FanCard
              title="TRUCK SCALE"
              desc="Data logging and receipt management."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

// bg-gradient-to-b from-white/4 via-[#11020f]  to-theme1-base #4d2926
