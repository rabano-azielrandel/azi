"use client";

import dynamic from "next/dynamic";
import { useTheme } from "@/app/ThemeProvider";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Bot() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <section className="w-full h-[400px] rounded-xl overflow-hidden">
      <Spline
        scene={` ${
          isDarkMode
            ? "/splines/yellow-bot.spline"
            : "/splines/yellow_light_bot.spline"
        } `}
        className="w-full h-auto"
      />
    </section>
  );
}
