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

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
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
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
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
          speed: 2,
          straight: true,
        },
        number: {
          density: {
            enable: false,
            area: 800,
          },
          value: 110,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: ["square", "circle"],
        },
        size: {
          value: { min: 2, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
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
