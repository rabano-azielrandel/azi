"use client";

import dynamic from "next/dynamic";

const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

export default function Bot() {
  return (
    <section className="w-full h-[400px] rounded-xl overflow-hidden">
      <Spline scene="/splines/yellow-bot.spline" className="w-full h-auto" />
    </section>
  );
}
