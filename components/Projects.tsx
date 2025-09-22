import React from "react";
import SplitCarousel from "./ui/SplitCarousel";

const Projects = () => {
  return (
    <main
      id="projects"
      className="relative mt-8 w-full px-4 h-[700px] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-2 flex flex-col justify-center items-center">
        <div className="w-full h-full flex gap-4">
          <div className="w-full rounded-xl p-4 bg-white/3 border-1 border-theme1-secondary ">
            <SplitCarousel />
          </div>
          <div className="w-full rounded-xl p-4 bg-white/3">top mid</div>
          <div className="w-full rounded-xl p-4 bg-white/3">top right</div>
        </div>
        <div className="w-full h-full flex gap-4">
          <div className="w-[67%] rounded-xl p-4 bg-white/3">bot left</div>
          <div className="w-[33%] rounded-xl p-4 bg-white/3">bot right</div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
