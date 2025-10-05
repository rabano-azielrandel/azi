import React from "react";
import SplitCard from "./ui/SplitCard";
import RippleCard from "./ui/RippleCard";
import FanCard from "./ui/FanCard";
import DiceCard from "./ui/DiceCard";
import RegCard from "./ui/RegCard";
import Bot from "./ui/Bot";

const Projects = () => {
  return (
    <main id="projects" className="relative mt-20 w-full px-4">
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-x-2 gap-y-4 flex flex-col justify-center items-center">
        <div className="w-full h-full flex gap-4">
          <div className="w-[67%] h-auto rounded-xl bg-white/3 border-1 border-white/30 overflow-hidden">
            <Bot />
          </div>

          <div className="w-[33%] h-auto  rounded-xl p-4 bg-white/3 border-1 border-white/30">
            <DiceCard
              title="Digital Payslip"
              desc="Digitalize traditional payslip."
            />
          </div>
        </div>

        <div className="w-full h-full flex gap-4">
          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-white/30">
            <SplitCard />
          </div>

          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-white/30">
            <RippleCard
              image="project-resort-management.jpg"
              title="Resort Management"
              desc="Streamline reservations, billing, and staff managemnt."
            />
          </div>

          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-white/30">
            <FanCard
              title="Truck Scale"
              desc="Data logging and receipt management."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
