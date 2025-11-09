"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/app/ThemeProvider";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Bot() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <section className="relative w-full h-[400px] rounded-xl overflow-hidden">
      {/* Dark Mode Spline */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${
          isDarkMode ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Spline scene="/splines/yellow-bot.spline" className="w-full h-full" />
      </div>

      {/* Light Mode Spline */}
      <div
        className={`absolute inset-0 transition-opacity duration-200 ${
          isDarkMode ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Spline
          scene="/splines/yellow_light_bot.spline"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
