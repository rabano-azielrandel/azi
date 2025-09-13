"use client";

import { useEffect, useRef } from "react";

const FloatingTechStacks = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      // Get container center
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Mouse position relative to center (-1 to 1)
      const x = (e.clientX - centerX) / width;
      const y = (e.clientY - centerY) / height;

      // Move each icon based on its depth factor
      itemsRef.current.forEach((el, index) => {
        if (!el) return;

        const depth = 15 + index * 5; // adjust movement intensity
        const moveX = x * depth;
        const moveY = y * depth;

        el.style.transform = `translate(${moveX}px, ${moveY}px) scale(1)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] rounded-2xl overflow-hidden flex items-center justify-center"
    >
      {techStacks.map((tech, index) => (
        <img
          key={tech.name}
          ref={(el) => {
            itemsRef.current[index] = el; // ✅ Corrected ref callback
          }}
          src={tech.src}
          alt={tech.name}
          className="absolute w-20 h-20 lg:w-24 lg:h-24 transition-transform duration-150 ease-out drop-shadow-[0_0_10px_rgba(0,0,0,.3)] hover:scale-125"
          style={{
            top: `${[10, 25, 35, 5, 50, 40, 75, 80,60][index]}%`,
            left: `${[20, 40, 5, 60, 50, 70, 35, 60, 15][index]}%`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingTechStacks;

const techStacks = [
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TailwindCSS",
    src: "https://cdn.simpleicons.org/tailwindcss/38BDF8",
  },
  {
    name: "GraphQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "WordPress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "MongoDB",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "WordPress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
  {
    name: "WordPress",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
  },
];
