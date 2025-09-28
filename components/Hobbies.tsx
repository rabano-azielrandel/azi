import React from "react";
import { Meteors } from "./ui/shadcn-io/meteors";
import SlideTrackingCard from "./ui/SlideTrackingCard";

const Hobbies = () => {
  return (
    <main
      id="hobbies"
      className="relative mt-8 w-full px-4 h-[700px] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-12 flex flex-col justify-center items-center">
        <p className="font-oswald text-5xl text-theme1-secondary ">HOBBIES</p>
        <SlideTrackingCard />
      </div>
    </main>
  );
};

export default Hobbies;
