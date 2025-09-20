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

        <div className="z-10 text-white">
          <h1 className="text-4xl font-bold">AZIEL RANDEL</h1>
          <p>blah blah blah</p>
        </div>

        <FloatingTechStacks position="right" />
      </div>
    </main>
  );
}