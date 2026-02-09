"use client";
import { useEffect, useState } from "react";
import { Zap, ShieldCheck, Rocket, Server } from "lucide-react";

type Item = {
  text: string;
  textColor: string;
  bgColor: string;
  Icon: any;
};

export default function HeroAnimator() {
  const items: Item[] = [
    {
      text: "Fast",
      textColor: "text-white",
      bgColor: "bg-purple-600",
      Icon: Zap,
    },
    {
      text: "Secure",
      textColor: "text-white",
      bgColor: "bg-pink-500",
      Icon: ShieldCheck,
    },
    {
      text: "Reliable",
      textColor: "text-white",
      bgColor: "bg-blue-500",
      Icon: Server,
    },
    {
      text: "Scalable",
      textColor: "text-white",
      bgColor: "bg-emerald-500",
      Icon: Rocket,
    },
  ];

  const [phase, setPhase] = useState<"fullscreen" | "icons" | "grid">(
    "fullscreen",
  );
  const [index, setIndex] = useState(0);
  const [iconStep, setIconStep] = useState(0);
  const [gridStep, setGridStep] = useState(0);

  /* ---------------- PHASE 1 : FULLSCREEN WORDS ---------------- */
  useEffect(() => {
    if (phase !== "fullscreen") return;

    if (index < items.length - 1) {
      const t = setTimeout(() => setIndex(index + 1), 1200);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setPhase("icons");
      setIconStep(0);
    }, 900);

    return () => clearTimeout(t);
  }, [index, phase]);

  /* ---------------- PHASE 2 : ICONS ---------------- */
  useEffect(() => {
    if (phase !== "icons") return;

    if (iconStep < 4) {
      const t = setTimeout(() => setIconStep(iconStep + 1), 500);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setPhase("grid");
      setGridStep(0);
    }, 1200);

    return () => clearTimeout(t);
  }, [iconStep, phase]);

  /* ---------------- PHASE 3 : GRID ---------------- */
  useEffect(() => {
    if (phase !== "grid") return;

    if (gridStep < 4) {
      const t = setTimeout(() => setGridStep(gridStep + 1), 700);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setPhase("fullscreen");
      setIndex(0);
    }, 2000);

    return () => clearTimeout(t);
  }, [gridStep, phase]);

  const current = items[index];

  /* ---------------- RENDER PHASE 1 ---------------- */
  if (phase === "fullscreen") {
    return (
      <div
        key={index}
        className={`min-h-screen flex items-center justify-center transition-all duration-700 ${current.bgColor}`}
      >
        <h1
          className={`text-6xl md:text-8xl font-extrabold animate-fade ${current.textColor}`}
        >
          {current.text}
        </h1>
      </div>
    );
  }

  /* ---------------- RENDER PHASE 2 ---------------- */
  if (phase === "icons") {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex gap-12">
          {items.map((item, i) => {
            const Icon = item.Icon;
            const visible = iconStep > i;

            return (
              <div
                key={i}
                className={`
                  transition-all duration-700 transform
                  ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
              >
                <Icon size={90} className="text-white" />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  /* ---------------- RENDER PHASE 3 ---------------- */
  const positions = [
    "col-start-1 row-start-1", // TL
    "col-start-2 row-start-1", // TR
    "col-start-1 row-start-2", // BL
    "col-start-2 row-start-2", // BR
  ];

  return (
    <div className="h-screen w-screen grid grid-cols-2 grid-rows-2 divide-x divide-y divide-white/20">
      {items.map((panel, i) => {
        const visible = gridStep > i;

        return (
          <div
            key={i}
            className={`
              ${positions[i]}
              flex items-center justify-center
              transition-all duration-700
              ${panel.bgColor}
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-75"}
            `}
          >
            <h1
              className={`text-5xl md:text-7xl font-extrabold ${panel.textColor}`}
            >
              {panel.text}
            </h1>
          </div>
        );
      })}
    </div>
  );
}
