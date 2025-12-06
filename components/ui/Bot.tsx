"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Bot() {
  return (
    <section className="relative w-full h-[360px] rounded-xl overflow-hidden">
      {/* Dark Mode Spline */}
      <div
        className={`absolute w-full h-[400px] inset-0 transition-opacity duration-200 opacity-100 light:opacity-0 light:pointer-events-none`}
      >
        <Spline scene="/splines/yellow-bot.spline" className="w-full h-full" />
      </div>

      {/* Light Mode Spline */}
      <div
        className={`absolute w-full h-[400px] inset-0 transition-opacity duration-200 opacity-0 pointer-events-none light:opacity-100`}
      >
        <Spline scene="/splines/blue_bot.spline" className="w-full h-full" />
      </div>
    </section>
  );
}
