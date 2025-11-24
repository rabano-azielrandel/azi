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
        isDarkMode ? "bg-[#0A0A0A]" : "bg-[#939FB2]"
      }`}
    >
      <div className="relative w-full max-w-[1360px] p-2 gap-4 flex flex-col justify-center items-center">
        {/* Text */}
        <div
          className="w-full flex flex-col-reverse lg:flex-row items-start gap-16 mb-10"
          style={{ textShadow: "0 1px 2px rgba(0,0,0,0.22)" }}
        >
          {/* FOOTER TITLE */}
          <div className="w-[30%] min-w-96 h-full flex flex-col items-center gap-8 select-none cursor-default">
            <h2
              className={`font-semibold leading-snug text-4xl text-center lg:text-left ${
                isDarkMode ? "text-theme-accent3" : "text-theme-dark-accent3"
              }`}
            >
              {/* Mobile version */}
              <span className="lg:hidden">
                Got an Idea? Let’s Make It Real.
              </span>

              {/* Desktop version */}
              <span className="hidden lg:inline">
                Got an Idea? <br /> Let’s Make It Real.
              </span>
            </h2>

            <p className="font-light leading-tight text-sm text-theme-accent4">
              © 2025 Aziel Randel Rabano All rights reserved.
            </p>
          </div>

          {/* Nav Links */}
          <div className="hidden lg:flex flex-col w-fit min-w-32 h-full items-start justify-center gap-2">
            <h3
              className={`font-extrabold mb-4 ${
                isDarkMode ? "text-theme-accent3" : "text-theme-dark-accent3"
              }`}
            >
              Quick Links
            </h3>

            {links.map((src, idx) => (
              <Link
                key={idx}
                href={src.href}
                className={`${
                  isDarkMode ? "text-theme-accent4" : "text-theme-dark-accent4"
                }`}
              >
                {src.text}
              </Link>
            ))}
          </div>

          {/* Assets Credits */}
          <div className="hidden lg:flex flex-col w-fit min-w-32 h-full items-start justify-center gap-2">
            <h3
              className={`font-extrabold mb-4 ${
                isDarkMode ? "text-theme-accent3" : "text-theme-dark-accent3"
              }`}
            >
              Resources
            </h3>

            {asset.map((src, idx) => (
              <Link
                key={idx}
                href={src.href}
                className={`${
                  isDarkMode ? "text-theme-accent4" : "text-theme-dark-accent4"
                }`}
              >
                {src.text}
              </Link>
            ))}
          </div>

          {/* Stacks */}
          <div className="hidden lg:flex flex-col w-fit min-w-32  h-full items-start justify-center gap-2">
            <h3
              className={`font-extrabold mb-4 ${
                isDarkMode ? "text-theme-accent3" : "text-theme-dark-accent3"
              }`}
            >
              Built With
            </h3>

            {stacks.map((src, idx) => (
              <Link
                key={idx}
                href={src.href}
                className={`${
                  isDarkMode ? "text-theme-accent4" : "text-theme-dark-accent4"
                }`}
              >
                {src.text}
              </Link>
            ))}
          </div>

          {/* Message */}
          <div className="w-fit min-w-32 h-full flex flex-col text-center lg:text-left items-center lg:items-start justify-center gap-2 select-none cursor-default">
            <h3
              className={`font-extrabold mb-2 ${
                isDarkMode ? "text-theme-accent3" : "text-theme-dark-accent3"
              }`}
            >
              Behind the Code
            </h3>

            <p
              className={`text-wrap ${
                isDarkMode ? "text-theme-accent4" : "text-theme-dark-accent4"
              }`}
            >
              A product of fleeting midnight moments, persistence, and
              unwavering passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
