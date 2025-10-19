"use client";

import { useState } from "react";
import Image from "next/image";

const exp = [
  {
    img: "/images/INTERN.jpg",
    title: "INTERN",
    desc: "I am currently working as an intern at Toyota Bataan Inc., where my main responsibilities include design related tasks and computer servicing.",
  },
  {
    img: "/images/FREELANCE.jpg",
    title: "FREELANCE",
    desc: "I’ve worked on two freelance projects: a Resort Management system where I focused on backend development, and a Truck Scale system where I handled both frontend and backend roles.",
  },
  {
    img: "/images/CORPORATE.jpg",
    title: "CORPORATE",
    desc: "In my latest corporate role as a Full Stack .NET Programmer, I contributed to the development and maintenance of core internal systems, including Payroll, HRIS, and Manpower Control. I also led the end-to-end creation of a Digital Payslip Automation System, which streamlines payroll distribution by automatically emailing payslips to all employees.",
  },
];

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <section
      id="experience"
      className="relative mt-8 flex h-screen w-full items-center justify-center bg-gradient-to-t from-theme-accent2"
    >
      <div
        className="relative w-full max-w-[1360px] h-full pt-10 pb-40 mx-auto gap-x-2 gap-y-4
      flex justify-center items-center overflow-hidden"
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-6">
          <div className="bg-white/10 border border-white/30 px-6 py-3 rounded-xl">
            <h2 className="text-4xl font-oswald font-semibold text-theme1-secondary text-center">
              Chapters In My Path
            </h2>
          </div>

          <div className="w-full h-full flex justify-center items-center">
            {exp.map((src, idx) => (
              <div
                key={idx}
                className={`w-full h-full overflow-hidden relative transition-all duration-500 ease-in-out ${
                  activeIndex === idx ? "flex-[3]" : "flex-1"
                }`}
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
              >
                {/* Image */}
                <Image
                  alt="img"
                  src={src.img}
                  width={900}
                  height={900}
                  className={`h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    activeIndex === idx
                      ? "scale-105 brightness-100 blur-0"
                      : "scale-100 brightness-75 blur-[2px]"
                  }`}
                />
                {/* Text */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center text-theme1-secondary px-4 transition-all duration-700 ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${
                    activeIndex === idx
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                >
                  <div className="flex flex-col text-center justify-center backdrop-blur-sm bg-black/30 rounded-2xl px-6 py-4 ">
                    <h2 className="text-4xl font-bold text-theme1-secondary">
                      {src.title}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-theme1-secondary">
                      {src.desc}
                    </p>
                  </div>
                </div>
              </div>
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
