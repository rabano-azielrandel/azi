"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";

const Particles = dynamic(
  () =>
    import("@/components/ui/shadcn-io/particles").then((mod) => mod.Particles),
  { ssr: false }
);

interface WrapperProps {
  children?: ReactNode;
}

export default function GlobalParticlesWrapper({ children }: WrapperProps) {
  return (
    <>
      <Particles
        className="fixed inset-0 pointer-events-none"
        quantity={100}
        ease={80}
        staticity={50}
        size={0.8}
        color="#ffffff"
      />
      {children}
    </>
  );
}
