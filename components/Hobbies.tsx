// Hobbies.jsx

"use client"; // Required for hooks in Next.js App Router

import React from "react";
import { useInView } from "react-intersection-observer";

// Your other imports
// import { Meteors } from "./ui/shadcn-io/meteors";
// import SlideTrackingCard from "./ui/SlideTrackingCard";
// import CarouselHobbies from "./CarouselHobbies";

const items = [
  { id: 1, text: "First Item" },
  { id: 2, text: "Second Item" },
  { id: 3, text: "Third Item" },
  { id: 4, text: "Fourth Item" },
];

const Hobbies = () => {
  // 1. Set up the observer hook
  const { ref, inView } = useInView({
    // Options
    triggerOnce: true, // The animation will only play once
    threshold: .4,    // Trigger when 10% of the component is visible
  });
  

  const calculateDelay = (index:number) => {

  }

  return (
    // 2. Attach the `ref` to the section you want to watch
    <section
      ref={ref}
      id="hobbies"
      className="relative mt-8 flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="flex w-full max-w-md flex-col items-center gap-4">
        {items.map((item, index) => (
          <div
            key={item.id}
            // 3. Conditionally apply the animation class
            className={`
              w-full rounded-lg bg-white p-6 text-center shadow-md
              transition-all duration-500
              ${inView ? "animate-slide-in opacity-100" : "translate-y-10 opacity-0"}
            `}
            style={{
              // The delay is applied, but the animation won't start until the class is added
              transitionDelay: `${index * 200}ms`,
              animationDelay: `${index * 200}ms`,
            }}
          >
            <p className="text-lg font-semibold text-slate-800">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hobbies;