import React from "react";
import SplitCarousel from "./ui/SplitCarousel";
import RegCard from "./ui/RegCard";
import Bot from "./ui/Bot";

const Projects = () => {
  return (
    <main id="projects" className="relative mt-8 w-full px-4 h-[700px]">
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-2 flex flex-col justify-center items-center">
        <div className="w-full h-full flex gap-4">
          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-theme1-secondary">
            <SplitCarousel />
          </div>

          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-theme1-secondary">
            <RegCard
              image="project-resort-management.jpg"
              title="Resort Management"
              desc="Streamline reservations, billing, and staff managemnt."
            />
          </div>

          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-theme1-secondary">
            <RegCard
              image="project-truck-scale.jpg"
              title="Truck Scale"
              desc="Truck scale operations, data logging, and receipt management."
            />
          </div>
        </div>

        <div className="w-full h-full flex gap-4">
          <div className="w-[67%] h-auto rounded-xl bg-white/3 border-1 border-theme1-secondary overflow-hidden">
            <Bot />
          </div>

          <div className="w-[33%] h-auto  rounded-xl p-4 bg-white/3 border-1 border-theme1-secondary">
            <RegCard
              image="project-digital-payslip.jpg"
              title="Digital Payslip"
              desc="Digitalize traditional payslip."
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
