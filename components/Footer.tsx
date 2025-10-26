import React from "react";
import Image from "next/image";
import Link from "next/link";

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
  return (
    <div className="relative w-full bottom-0 z-150 flex flex-col items-center justify-center gap-32">
      <div className="relative w-full max-w-[1360px] p-2 gap-4 flex flex-col justify-center items-center">
        {/* Image */}
        <div className="relative w-full h-[200px] rounded-xl border-1 border-white">
          <Image
            src="/images/footery.jpg"
            alt="black hole"
            fill
            className="object-cover object-center rounded-xl"
          />
        </div>

        {/* Text */}
        <div className="w-full flex items-start gap-16 mb-10">
          {/* FOOTER TITLE */}
          <div className="w-[30%] min-w-96 h-full flex flex-col gap-8 select-none cursor-default">
            <h2 className="font-semibold leading-snug text-4xl text-theme-accent3">
              Got an Idea? <br /> Let’s Make It Real.
            </h2>
            <p className="font-light leading-tight text-sm text-theme-accent4">
              © 2025 Aziel Randel Rabano All rights reserved.
            </p>
          </div>

          {/* Nav Links */}
          <div className="w-fit min-w-32 h-full flex flex-col items-start justify-center gap-2">
            <h3 className="font-extrabold mb-4 text-theme-accent3">
              Quick Links
            </h3>

            {links.map((src, idx) => (
              <Link key={idx} href={src.href} className="text-theme-accent4">
                {src.text}
              </Link>
            ))}
          </div>

          {/* Assets Credits */}
          <div className="w-fit min-w-32 h-full flex flex-col items-start justify-center gap-2">
            <h3 className="font-extrabold mb-4 text-theme-accent3">
              Resources
            </h3>

            {asset.map((src, idx) => (
              <Link key={idx} href={src.href} className="text-theme-accent4">
                {src.text}
              </Link>
            ))}
          </div>

          {/* Stacks */}
          <div className="w-fit min-w-32  h-full flex flex-col items-start justify-center gap-2">
            <h3 className="font-extrabold mb-4 text-theme-accent3">
              Built With
            </h3>

            {stacks.map((src, idx) => (
              <Link key={idx} href={src.href} className="text-theme-accent4">
                {src.text}
              </Link>
            ))}
          </div>

          {/* Message */}
          <div className="w-fit min-w-32 h-full flex flex-col items-start justify-center gap-2 select-none cursor-default">
            <h3 className="font-extrabold mb-2 text-theme-accent3">
              Behind the Code
            </h3>

            <p className="text-wrap text-theme-accent4">
              A product of fleeting midnight moments, persistence, and
              unwavering passion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
