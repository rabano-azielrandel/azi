"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/app/ThemeProvider";

const links = [
  { text: "Me", href: "#me" },
  { text: "Projects", href: "#projects" },
  { text: "Experience", href: "#experience" },
  { text: "Hobbies", href: "#hobbies" },
  { text: "Contacts", href: "#contacts" },
];

const asset = [
  { text: "Pinterest", href: "https://ph.pinterest.com/" },
  { text: "Spline", href: "https://app.spline.design" },
  { text: "Shadcn", href: "https://www.shadcn.io/" },
  { text: "Flaticon", href: "https://www.flaticon.com/" },
];

const stacks = [
  { text: "Vercel", href: "https://vercel.com/" },
  { text: "Next.js", href: "https://nextjs.org/" },
  { text: "Tailwind CSS", href: "https://tailwindcss.com/" },
  { text: "Lucide Icons", href: "https://lucide.dev/" },
];

export default function Footer() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div
      className={`relative w-full pt-10 px-4 z-10 flex flex-col items-center justify-center gap-32 overflow-x-hidden ${
        isDarkMode ? "bg-[#0A0A0A]" : "bg-[#E9F2FB]"
      }`}
    >
      <div className="relative w-full max-w-[1360px] p-2 gap-4 flex flex-col justify-center items-center">
        {/* Text */}
        <div
          className="w-full flex flex-col items-center gap-6 py-12"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.22)" }}
        >
          {/* Message */}
          <div className="flex flex-col items-center gap-2 max-w-md text-center">
            <h3
              className={`font-semibold text-xl ${
                isDarkMode ? "text-theme-accent3" : "text-theme-dark-accent3"
              }`}
            >
              Behind the Code
            </h3>

            <p className="font-light text-sm leading-snug text-theme-accent4">
              A product of fleeting midnight moments, persistence, and
              unwavering passion.
            </p>
          </div>

          {/* Divider (Optional, like Apple) */}
          <div className="w-full max-w-xs border-t border-white/10" />

          {/* Footer Title */}
          <div className="flex flex-col items-center gap-2">
            <h3
              className={`font-semibold text-xl ${
                isDarkMode ? "text-theme-accent3" : "text-theme-dark-accent3"
              }`}
            >
              Got an Idea? Let’s Make It Real.
            </h3>

            <p className="font-light text-xs text-theme-accent4">
              © 2025 Aziel Randel Rabano. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
