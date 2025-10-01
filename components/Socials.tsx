import { div } from "framer-motion/client";
import React from "react";

const socialPlatform = ["linkedin", "github", "gmail", "viber"];

const Socials = () => {
  return (
    <main
      id="hobbies"
      className="relative mt-8 w-full px-4 h-[700px] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-12 flex flex-col justify-center items-center">
        <p className="font-oswald text-5xl text-theme1-secondary "> Socials </p>
        <div className="w-full h-full">
          {socialPlatform.map((src, index) => (
            <div key={index}>
              <p> {src} </p>
            </div>
          ))}
          ;
        </div>
      </div>
    </main>
  );
};

export default Socials;
