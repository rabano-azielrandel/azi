"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Bot() {
  return (
    <main className="w-full h-[380px]">
      <Spline scene="/splines/light-bot.spline" className="w-full h-auto" />
    </main>
  );
}
