import React from "react";
import Timeline from "./ui/Timeline";

const Experience = () => {
  return (
    <main
      id="projects"
      className="relative mt-8 w-full px-4 h-[700px] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-12 flex flex-col justify-center items-center">
        <p>EXPERIENCE</p>

        <Timeline />
      </div>
    </main>
  );
};

export default Experience;
