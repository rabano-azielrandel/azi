"use client";

import FloatingTechStacks from "@/components/FloatingTechStacks";
import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "./ui/ParticlesBackground";
import { useTheme } from "../app/ThemeProvider";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <section
      className={`relative w-full pt-0 lg:pt-20  px-4 h-[800px]  overflow-hidden ${
        isDarkMode
          ? "bg-gradient-to-b from-white/4 via-[#11020f] to-theme1-base"
          : "bg-gradient-to-b from-[#F7F7F7] via-[#2f486d]/50 to-[#F7F7F7]"
      }`} // original light : bg-gradient-to-b from-[#f8c98a]/80 via-[#3a3f52]/60 to-[#0a0f1a]/20
    >
      <ParticlesBackground />

      <div className="relative z-10 w-full h-full mx-auto flex justify-center items-center">
        <FloatingTechStacks position="left" />

        {/* center content */}
        <div className="relative w-full h-fit flex flex-col gap-10 justify-center items-center">
          {/* image and cta */}
          <div className="relative">
            {/* grad image */}
            <div className="relative group ">
              <div
                className="relative flex w-[320px] lg:w-[380px] 2xl:w-[400px] h-auto flex-col items-center justify-center rounded-[5%] transition-transform 
              duration-500 [transform-style:preserve-3d] [transform:perspective(1000px)] [transition-timing-function:cubic-bezier(.03,.98,.52,.99)]"
                data-tilt
                data-tilt-glare
                data-tilt-max-glare="0.1"
                data-tilt-reverse="true"
                data-tilt-transition="true"
                data-tilt-easing="cubic-bezier(.03,.98,.52,.99)"
              >
                <Image
                  src="/images/grad-bg.png"
                  alt="Graduation background"
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-[5%] transition-all duration-400 ease-in-out 
                  shadow-[rgba(0,0,0,0.4)_0px_2px_4px,rgba(0,0,0,0.3)_0px_7px_13px_-3px,rgba(0,0,0,0.2)_0px_-3px_0px_inset] hover:shadow-none"
                />

                <div
                  className="absolute z-[1] flex w-full h-auto scale-[0.94] flex-col items-center justify-center 
              rounded-[5%] bg-[rgba(37,35,35,0.5)] transition-all duration-500 ease-in-out [transform:translateZ(60px)] hover:bg-transparent"
                >
                  <Image
                    src="/images/grad-me.png"
                    alt="Graduation portrait"
                    width={500}
                    height={600}
                    className="w-[500px] h-auto rounded-[5%] scale-110 group-hover:scale-100 transition-all"
                    style={{
                      filter: "drop-shadow(12px 10px 6px rgba(0,0,0,0.4))",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* cta button */}
            <Link
              href={"#projects"}
              className="absolute bottom-25 -right-40 2xl:-right-45 hidden 2xl:flex items-center gap-2 h-fit"
            >
              <div className="w-[100px] 2xl:w-[120px] h-[5px] rounded-full bg-theme1-accent" />
              <span
                className={` ${
                  isDarkMode ? "text-theme1-secondary" : "text-theme1-base"
                } text-[15px] font-bold`}
              >
                VIEW PROJECTS
              </span>
            </Link>
          </div>

          {/* text */}
          <div className="w-full h-fit flex flex-col gap-2 justify-center items-center mx-auto mt-2 lg:mt-0">
            <h1 className="w-fit font-oswald font-bold text-4xl 2xl:text-5xl z-50">
              <span
                className={`${
                  isDarkMode ? "text-theme1-secondary" : "text-theme1-base"
                }`}
              >
                AZIEL
              </span>
              <span className="text-theme1-accent">RANDEL</span>
            </h1>
            <p className="relative tracking-[6px] text-[12px] lg:text-[14px]">
              <span className="text-theme1-accent font-bold">SOFTWARE</span>
              <span className="text-theme1-accent"> / </span>
              <span
                className={`${
                  isDarkMode ? "text-theme1-secondary" : "text-theme1-base"
                }`}
              >
                WEB DEVELOPER
              </span>
              <span
                className={`absolute top-0 -right-1 w-[3px] h-full ${
                  isDarkMode ? "bg-white" : "bg-gray-700"
                } animate-fade-pulse`}
              />
            </p>

            <Link
              href={"#projects"}
              className=" 2xl:-right-45 flex 2xl:hidden items-center gap-2 h-fit mt-4"
            >
              <span
                className={` ${
                  isDarkMode ? "text-theme1-secondary" : "text-theme1-base"
                } text-[15px] font-bold py-2 px-8 2xl:p-0 rounded-xl border 2xl:border-0 border-theme1-accent`}
              >
                VIEW PROJECTS
              </span>
              <div className="hidden 2xl:block w-[100px] 2xl:w-[120px] h-[3px] 2xl:h-[5px] rounded-full bg-theme1-accent" />
            </Link>
          </div>
        </div>

        <FloatingTechStacks position="right" />
      </div>
    </section>
  );
}
