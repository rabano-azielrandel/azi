"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { text: "Me", href: "#me" },
  { text: "Projects", href: "#projects" },
  { text: "Experience", href: "#experience" },
  { text: "Hobbies", href: "#hobbies" },
  { text: "Socials", href: "#socials" },
  { text: "Contacts", href: "#contacts" },
];

export default function Sidebar() {
  const [activeHash, setActiveHash] = useState<string>("#me");

  useEffect(() => {
    const sections = navLinks.map((link) =>
      document.querySelector(link.href)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // 50% of section visible triggers highlight
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setActiveHash(href);
  };

  return (
    <div className="z-50 fixed left-0 top-0 w-[125px] h-full flex flex-col justify-center items-center">
      <nav className="w-fit h-fit p-2 rounded-full bg-[#201f22] flex flex-col justify-between gap-0 border border-[#cbd5e1]/10">
        {navLinks.map((item) => {
          const isActive = activeHash === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={`py-1 w-full h-[100px] flex justify-center items-center rounded-full text-vertical-bt transition-colors duration-150 ${
                isActive
                  ? "bg-[#3de9c4] text-[#292729] font-medium text-[16px]"
                  : "text-[#cbd5e1] font-thin text-[14px] hover:text-[#3de9c4]"
              }`}
            >
              {item.text}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
