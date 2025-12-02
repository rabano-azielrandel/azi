"use client";

import { useTheme } from "@/app/ThemeProvider";
import { Particles } from "@/components/ui/shadcn-io/particles";

export default function GlobalParticlesWrapper() {
  const { isDarkMode } = useTheme();

  return (
    <Particles
      className={`fixed inset-0 w-full h-full ${
        isDarkMode
          ? ""
          : "bg-gradient-to-b from-[#F5F5F5] via-[#F7F7F7] to-[#F7F7F7]"
      }`}
      quantity={100}
      ease={80}
      staticity={50}
      color={isDarkMode ? "#FFFFFF" : "#4B5563"}
      size={0.8}
    />
  );
}
