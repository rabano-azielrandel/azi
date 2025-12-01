"use client";

import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground: React.FC = () => {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      // Add this key configuration change to disable full screen
      fullScreen: {
        enable: false,
      },
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: isMobile ? 30 : 120,
      interactivity: {
        events: {
          onClick: {
            enable: !isMobile,
            mode: "repulse",
          },
          onHover: {
            enable: !isMobile,
            mode: "attract",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          attract: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#decece",
        },
        links: {
          color: "#decece",
          distance: 150,
          enable: true,
          opacity: 0.08,
          width: 1,
        },
        move: {
          direction: MoveDirection.inside,
          enable: true,
          outModes: {
            default: OutMode.out,
          },
          random: false,
          speed: isMobile ? 0.8 : 2,
          straight: true,
        },
        number: {
          density: {
            enable: false,
            area: 800,
          },
          value: isMobile ? 25 : 110,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: ["square", "circle"],
        },
        size: {
          value: isMobile ? { min: 1, max: 2 } : { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [isMobile]
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        // This className tells the component to fill its parent
        className="absolute inset-0"
      />
    );
  }

  return null;
};

export default ParticlesBackground;
