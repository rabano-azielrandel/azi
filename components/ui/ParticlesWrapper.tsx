"use client";

import React, { useEffect, useState } from "react";
import { Particles } from "@/components/ui/shadcn-io/particles";

export default function ParticlesWrapper() {
  const [particleColor, setParticleColor] = useState("#4B5563");
  useEffect(() => {
    const isLight = document.documentElement.classList.contains("light");
    setParticleColor(isLight ? "#FFFFFF" : "#4B5563");
  }, []);

  return (
    <Particles
      className={`fixed top-0 left-0 inset-0 w-full h-full light:bg-gradient-to-b light:from-[#F5F5F5] light:via-[#F7F7F7] light:to-[#F7F7F7]`}
      quantity={100}
      ease={80}
      staticity={50}
      color={particleColor}
      size={0.8}
    />
  );
}
