import FloatingTechStacks from "@/components/FloatingTechStacks";
import Image from "next/image";
import Link from "next/link";
import ParticlesBackground from "./ui/ParticlesBackground";

export default function Hero() {
  return (
    <main className="relative mt-8 w-full px-4 h-[700px] overflow-hidden">
      {/* The ParticlesBackground component now respects the bounds of this <main> tag */}
      <ParticlesBackground />

      <div className="relative z-10 w-full h-full mx-auto flex justify-center items-center">
        <FloatingTechStacks position="left" />

        <div className="w-full h-fit flex flex-col justify-center items-center">
          <Image
            src="/images/SUBJECT.png"
            alt="subject"
            width={500}
            height={500}
            className=""
          />
          <div className="w-full h-fit flex flex-col justify-center items-center mx-auto">
            <h1 className="w-fit font-oswald font-bold text-5xl z-50">
              <span className="text-theme1-secondary">AZIEL </span>
              <span className="text-theme1-accent">RANDEL</span>
            </h1>
            <p className="w-fit text-[#f6ad49] tracking-[4px]">
              SOFTWARE & WEB DEVELOPER
            </p>
          </div>
        </div>
        <FloatingTechStacks position="right" />
      </div>
    </main>
  );
}
