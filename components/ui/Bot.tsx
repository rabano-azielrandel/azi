"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Bot() {
  return (
    <main className="w-full h-[400px]">
      <Spline scene="/splines/yellow-bot.spline" className="w-full h-auto" />
    </main>
  );
}
