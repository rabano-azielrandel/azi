"use client";

import React from "react";

export default function Footer() {
  return (
    <div
      className={`relative w-full px-4 z-10 flex flex-col items-center justify-center overflow-x-hidden bg-[#0A0A0A] light:bg-[#111111]`}
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
              className={`font-semibold text-xl text-theme-accent3 light:text-theme-dark-accent1`}
            >
              Behind the Code
            </h3>

            <p className="font-light text-sm leading-snug text-theme1-secondary">
              A product of fleeting midnight moments, persistence, and
              unwavering passion.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs border-t border-white/10" />

          {/* Footer Title */}
          <div className="flex flex-col items-center gap-2">
            <h3
              className={`font-semibold text-xl text-theme-accent3 light:text-theme-dark-accent1`}
            >
              Got an Idea? Let’s Make It Real.
            </h3>

            <p className="font-light text-xs text-theme1-secondary">
              © 2025 Aziel Randel Rabano. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
