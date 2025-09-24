import React from "react";
import SplitCarousel from "./ui/SplitCarousel";
import Bot from "./ui/Bot";

const Projects = () => {
  return (
    <main
      id="projects"
      className="relative mt-8 w-full px-4 h-[700px] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-2 flex flex-col justify-center items-center">
        <div className="w-full h-full flex gap-4">
          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-theme1-secondary">
            <SplitCarousel />
          </div>
          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-theme1-secondary">
            <div className="w-full h-4/5"> a </div>
            <div className="w-full h-1/5">
              <h1 className="text-lg font-bold text-white leading-tight">
                Resort Management
              </h1>
              <p className="text-sm text-gray-200 leading-snug">
                Streamline reservations, billing, and staff managemnt.
              </p>
            </div>
          </div>
          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-theme1-secondary">
            <div className="w-full h-4/5"> a </div>
            <div className="w-full h-1/5">
              <h1 className="text-lg font-bold text-white leading-tight">
                Truck Scale
              </h1>
              <p className="text-sm text-gray-200 leading-snug">
                Weigh the trucks.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex gap-4">
          <div className="w-[67%] rounded-xl p-4 bg-white/3">
            <Bot />
          </div>
          <div className="w-[33%] rounded-xl p-4 bg-white/3">
            <div className="w-full h-4/5"> a </div>
            <div className="w-full h-1/5">
              <h1 className="text-lg font-bold text-white leading-tight">
                Digital Payslip
              </h1>
              <p className="text-sm text-gray-200 leading-snug">
                Digitalization of payslip.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
