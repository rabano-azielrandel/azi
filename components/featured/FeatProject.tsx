"use client";

import { useEffect, useState, Suspense } from "react";
import DynamicIcon from "./DynamicIcon";

/* -------------------- Types -------------------- */

type FeatureHeroProps = {
  feat_words?: string[] | null;
  feat_icons?: string[] | null;
  feat_textcolor?: string[] | null;
  feat_bgcolor?: string[] | null;
};

/* -------------------- Defaults -------------------- */

const DEFAULT_WORDS = ["Fast", "Secure", "Reliable", "Scalable"];
const DEFAULT_ICONS = ["Zap", "ShieldCheck", "Rocket", "Server"];
const DEFAULT_TEXT = ["#131212", "#e8d8c9", "#131212", "#e8d8c9"];
const DEFAULT_BG = ["#e8d8c9", "#c94f4f", "#f6ad49", "#1d1f2c"];

export default function FeatureHero(props: FeatureHeroProps) {
  /* Merge nullable props with defaults */

  const words = props.feat_words ?? DEFAULT_WORDS;
  const icons = props.feat_icons ?? DEFAULT_ICONS;
  const textColors = props.feat_textcolor ?? DEFAULT_TEXT;
  const bgColors = props.feat_bgcolor ?? DEFAULT_BG;

  const items = words.map((word, i) => ({
    word,
    icon: icons[i] ?? DEFAULT_ICONS[i],
    textColor: textColors[i] ?? DEFAULT_TEXT[i],
    bgColor: bgColors[i] ?? DEFAULT_BG[i],
  }));

  /* Animation states */

  const [phase, setPhase] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  const [panelIndex, setPanelIndex] = useState(0);

  /* Phase 1 — fullscreen words */
  useEffect(() => {
    if (phase !== 0) return;

    const timer = setInterval(() => {
      setWordIndex((prev) => {
        if (prev === items.length - 1) {
          clearInterval(timer);
          setTimeout(() => setPhase(1), 700);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, [phase]);

  /* Phase 2 — icons left → right */
  useEffect(() => {
    if (phase !== 1) return;

    const timer = setInterval(() => {
      setIconIndex((prev) => {
        if (prev === items.length) {
          clearInterval(timer);
          setTimeout(() => setPhase(2), 1500);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(timer);
  }, [phase]);

  /* Phase 3 — 4 panels */
  useEffect(() => {
    if (phase !== 2) return;

    const timer = setInterval(() => {
      setPanelIndex((prev) => {
        if (prev === items.length) {
          clearInterval(timer);
          setTimeout(() => {
            setPhase(0);
            setWordIndex(0);
            setIconIndex(0);
            setPanelIndex(0);
          }, 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 500);

    return () => clearInterval(timer);
  }, [phase]);

  /* -------- PHASE 1 -------- */

  if (phase === 0) {
    const current = items[wordIndex];

    return (
      <div
        className="w-screen h-screen flex items-center justify-center transition-all duration-700"
        style={{ backgroundColor: current.bgColor, color: current.textColor }}
      >
        <h1 className="text-[12vw] md:text-[8vw] font-extrabold animate-pulse">
          {current.word}
        </h1>
      </div>
    );
  }

  /* -------- PHASE 2 -------- */

  if (phase === 1) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black">
        <div className="flex gap-16">
          {items.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i < iconIndex
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ color: item.bgColor }}
            >
              <Suspense fallback={null}>
                <DynamicIcon name={item.icon} />
              </Suspense>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* -------- PHASE 3 -------- */

  return (
    <div className="grid grid-cols-2 grid-rows-2 w-screen h-screen">
      {items.map((item, i) => (
        <div
          key={i}
          className={`flex items-center justify-center transition-all duration-700
          ${i < panelIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          style={{ backgroundColor: item.bgColor, color: item.textColor }}
        >
          <h2 className="text-4xl md:text-6xl font-bold">{item.word}</h2>
        </div>
      ))}
    </div>
  );
}
