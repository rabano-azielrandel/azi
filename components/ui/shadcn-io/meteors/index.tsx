"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

interface MeteorsProps {
  number?: number;
  minDelay?: number;
  maxDelay?: number;
  minDuration?: number;
  maxDuration?: number;
  className?: string;
}

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 6,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
    []
  );

  useEffect(() => {
    const styles = Array.from({ length: number }).map(() => {
      // --- 1. SPENDING LOGIC (UNCHANGED) ---
      const edgeSelector = Math.random();

      let topPx: number;
      let leftPx: number;

      if (edgeSelector < 0.5) {
        // Spawn along the TOP edge (0-5% height)
        topPx = Math.floor(Math.random() * window.innerHeight * 0.05);
        leftPx = Math.floor(
          Math.random() * window.innerWidth * 0.95 + window.innerWidth * 0.05
        );
      } else {
        // Spawn along the RIGHT edge (95-100% width)
        topPx = Math.floor(Math.random() * window.innerHeight * 0.9);
        leftPx = Math.floor(
          window.innerWidth - Math.random() * (window.innerWidth * 0.05)
        );
      } // --- 2. PARALLEL MOVEMENT LOGIC (REVISED) ---
      // Define a fixed diagonal angle (e.g., 135 degrees) in radians.
      // This is the desired angle for top-right to bottom-left travel.
      // 135 deg = 3 * PI / 4 rad
      const angleRad = (3 * Math.PI) / 4;

      // Calculate a random travel distance (magnitude) for the meteor
      // This ensures meteors travel different lengths before exiting, adding variation.
      const minTravel = window.innerWidth * 0.8; // Minimum travel distance
      const maxTravel = window.innerWidth * 1.5; // Maximum travel distance
      const distance = Math.random() * (maxTravel - minTravel) + minTravel;

      // Calculate the X and Y components of the translation based on the fixed angle and random distance
      // dxNum will be negative (leftward)
      // dyNum will be positive (downward)
      const dxNum = distance * Math.cos(angleRad);
      const dyNum = distance * Math.sin(angleRad); // Compute angle (degrees) for rotation (should be 135 for all)

      const angleDeg = (angleRad * 180) / Math.PI;

      const duration =
        (Math.random() * (maxDuration - minDuration) + minDuration).toFixed(2) +
        "s";
      const delay =
        (Math.random() * (maxDelay - minDelay) + minDelay).toFixed(2) + "s";

      return {
        top: `${topPx}px`,
        left: `${leftPx}px`, // css variables for animation
        ["--dx" as any]: `${dxNum}px`,
        ["--dy" as any]: `${dyNum}px`,
        ["--duration" as any]: duration,
        ["--delay" as any]: delay,
        ["--angle" as any]: `${angleDeg}deg`, // Should consistently be ~135deg
      } as React.CSSProperties;
    });

    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration]);

  return (
    <>
      {meteorStyles.map((styleObj, idx) => {
        const angle = (styleObj as any)["--angle"] as string;
        const angleNum = parseFloat(angle); // e.g. "135deg" -> 135
        const tailAngle = `${angleNum + 180}deg`; // tail trails behind the head

        return (
          /* container: positioned and translated by animation */
          <span
            key={idx}
            style={styleObj}
            className={cn(
              "pointer-events-none absolute animate-meteor",
              className
            )}
          >
            {/* meteor head (rotated to align with movement) */}
            <span
              aria-hidden
              style={{
                width: "3px",
                height: "3px",
                borderRadius: 999,
                display: "block",
                transform: `rotate(${angle})`,
                transformOrigin: "center",
              }}
              className="bg-theme1-secondary block shadow-[0_0_4px_2px_#ffffff] -z-10"
            />

            {/* tail: positioned so it trails behind the head, rotated opposite direction */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: `translateY(-50%) rotate(${tailAngle})`,
                transformOrigin: "left center",
                width: "120px",
                height: "4px",
              }}
              className="bg-gradient-to-r from-theme-accent1/80 via-theme-accent1/50 to-transparent -z-10"
            />
          </span>
        );
      })}
    </>
  );
};
