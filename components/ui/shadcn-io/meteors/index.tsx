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

// Extend CSSProperties to include custom CSS variables
type MeteorStyle = React.CSSProperties & {
  "--dx"?: string;
  "--dy"?: string;
  "--duration"?: string;
  "--delay"?: string;
  "--angle"?: string;
};

export const Meteors = ({
  number = 20,
  minDelay = 0.2,
  maxDelay = 1.2,
  minDuration = 2,
  maxDuration = 6,
  className,
}: MeteorsProps) => {
  const [meteorStyles, setMeteorStyles] = useState<MeteorStyle[]>([]);

  useEffect(() => {
    const styles: MeteorStyle[] = Array.from({ length: number }).map(() => {
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
      }

      // Fixed diagonal angle (135° = 3π/4 rad)
      const angleRad = (3 * Math.PI) / 4;

      const minTravel = window.innerWidth * 0.8;
      const maxTravel = window.innerWidth * 1.5;
      const distance = Math.random() * (maxTravel - minTravel) + minTravel;

      const dxNum = distance * Math.cos(angleRad);
      const dyNum = distance * Math.sin(angleRad);

      const angleDeg = (angleRad * 180) / Math.PI;

      const duration =
        (Math.random() * (maxDuration - minDuration) + minDuration).toFixed(2) +
        "s";
      const delay =
        (Math.random() * (maxDelay - minDelay) + minDelay).toFixed(2) + "s";

      return {
        top: `${topPx}px`,
        left: `${leftPx}px`,
        "--dx": `${dxNum}px`,
        "--dy": `${dyNum}px`,
        "--duration": duration,
        "--delay": delay,
        "--angle": `${angleDeg}deg`,
      };
    });

    setMeteorStyles(styles);
  }, [number, minDelay, maxDelay, minDuration, maxDuration]);

  return (
    <>
      {meteorStyles.map((styleObj, idx) => {
        const angle = styleObj["--angle"] ?? "135deg";
        const angleNum = parseFloat(angle);
        const tailAngle = `${angleNum + 180}deg`;

        return (
          <span
            key={idx}
            style={styleObj}
            className={cn(
              "pointer-events-none absolute animate-meteor",
              className
            )}
          >
            {/* Meteor head */}
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

            {/* Meteor tail */}
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
