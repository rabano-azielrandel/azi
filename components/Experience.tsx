"use client";

import { useState } from "react";
import Image from "next/image";
import ExpCard from "./ui/ExpCard";

const expData = [
  {
    backgroundImage: "/images/INTERNS.jpg",
    label: "INTERN",
    p: "Intern at Toyota Bataan Inc., focused on design and computer servicing.",
  },
  {
    backgroundImage: "/images/FREELANCE.jpg",
    label: "FREELANCE",
    p: "Freelance developer for Resort and Truck Scale Systems, mainly backend-focused.",
  },
  {
    backgroundImage: "/images/CORPORATE.jpg",
    label: "CORPORATE",
    p: "Full Stack .NET dev for Payroll and HR systems, led Payslip Automation.",
  },
];

export default function Experience() {
  const [activeIndex, SetActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      className="relative mt-8 flex h-screen w-full items-center justify-center bg-gradient-to-t from-theme-accent2"
    >
      <div
        className="relative w-full h-[80%] max-w-[1360px] p-2 gap-4
      flex flex-col justify-center items-center overflow-hidden"
      >
        <h2 className="text-4xl font-oswald font-semibold text-theme1-secondary text-center">
          Chapters In My Path
        </h2>

        <div className="flex h-[100%] w-full overflow-hidden">
          <div className="relative w-full h-[600px] flex justify-between border-2 border-white rounded-lg ">
            <Image
              src={expData[activeIndex].backgroundImage}
              alt="background"
              fill
              className="object-cover -z-10"
              quality={100}
              priority
            />

            {expData.map((item, index) => (
              <ExpCard
                key={index}
                data={item}
                index={index}
                activeIndex={activeIndex}
                setActiveIndex={SetActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>

      <Image
        src={"/images/wave.svg"}
        alt="wave"
        width={1920}
        height={500}
        className="absolute -bottom-89 left-0 object-contain w-fit h-auto scale-y-[-1]"
      />
    </section>
  );
}
