"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

const ParticlesBackground = dynamic(() => import("./ui/ParticlesBackground"), {
  ssr: false, // Optional: avoids server-side rendering
  loading: () => <div className="w-full h-full" />, // Placeholder
});

const FloatingTechStacks = dynamic(
  () => import("@/components/FloatingTechStacks"),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function Hero() {
  return (
    <section className="relative w-full pt-20  px-4 h-[800px]  overflow-hidden bg-gradient-to-b from-white/4 via-[#11020f] to-theme1-base">
      <ParticlesBackground />

      <div className="relative z-10 w-full h-full mx-auto flex justify-center items-center">
        <FloatingTechStacks position="left" />

        {/* center content */}
        <div className="relative w-full h-fit flex flex-col gap-10 justify-center items-center">
          {/* image and cta */}
          <div className="relative">
            {/* grad image */}
            <div className="relative group">
              <div
                className="relative flex w-[400px] h-auto flex-col items-center justify-center rounded-[5%] transition-transform 
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
              className="absolute bottom-25 -right-45 flex items-center gap-2 h-fit"
            >
              <div className="w-[120px] h-[5px] rounded-full bg-theme1-accent" />
              <span className="text-theme1-secondary  text-[15px] font-bold">
                VIEW PROJECTS
              </span>
            </Link>
          </div>

          {/* text */}
          <div className="w-full h-fit flex flex-col gap-2 justify-center items-center mx-auto">
            <h1 className="w-fit font-oswald font-bold text-5xl z-50">
              <span className="text-theme1-secondary">AZIEL </span>
              <span className="text-theme1-accent">RANDEL</span>
            </h1>
            <p className="relative tracking-[6px] text-[14px]">
              <span className="text-theme1-accent font-bold">SOFTWARE</span>{" "}
              <span className="text-theme1-accent"> / </span>
              <span className="text-theme1-secondary ">WEB DEVELOPER</span>
              <span className="absolute top-0 -right-1 w-[3px] h-full bg-white animate-fade-pulse" />
            </p>
          </div>
        </div>

        <FloatingTechStacks position="right" />
      </div>
    </section>
  );
}
