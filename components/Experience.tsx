import React from "react";
import Timeline from "./ui/Timeline";
import { Meteors } from "./ui/shadcn-io/meteors";

const Experience = () => {
  return (
    <main
      id="experience"
      className="relative mt-14 w-full px-4 h-[1000px] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-12 flex flex-col justify-center items-center">
        <Meteors number={30} />
        <p className="font-oswald text-5xl text-theme1-secondary ">
          EXPERIENCE
        </p>
        <Timeline />
      </div>
    </main>
  );
};

export default Experience;
