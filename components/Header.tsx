"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ui/ThemeSwitch";

const navLinks = [
  { text: "Me", href: "#me" },
  { text: "Projects", href: "#projects" },
  { text: "Experience", href: "#experience" },
  { text: "Hobbies", href: "#hobbies" },
  { text: "Contacts", href: "#contacts" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerClasses = `
    w-full h-[50px] max-w-fit px-6 py-2 
    rounded-2xl mx-auto flex items-center justify-center gap-10 border
    shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_6px_6px] p-4
    transition-all duration-300 ease-in-out
    ${
      isScrolled
        ? "bg-theme1-base border-white/10"
        : "bg-transparent border-transparent"
    }
  `;

  return (
    <div className="fixed top-0 z-50 w-full px-4 pt-[30px]">
      <div className={headerClasses}>
        <Link href={""}>
          <span className="font-extrabold text-[#f3eaea] text-[20px] tracking-[0px] transition-all font-oswald italic group">
            <span className="text-[#e8d8c9] group-hover:text-theme1-accent transition-all">
              Aziel
            </span>
            <span className="text-[#f6ad49]">.</span>
            <span className="text-theme1-accent group-hover:text-[#e8d8c9] transition-all duration-300 ease-in-out">
              Randel
            </span>
          </span>
        </Link>

        <nav className="flex gap-4 group/one">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-[14px] text-theme1-secondary relative group-hover/one:opacity-50 group hover:opacity-100 transition-all duration-200 ease-in-out"
            >
              {item.text}

              {/* hover */}
              <div
                className={`group-hover:w-full w-0 h-[2px] bg-theme1-secondary absolute left-0 -bottom-1 transition-all duration-200 ease-in-out rounded-full`}
              />
            </Link>
          ))}
        </nav>

        <ThemeSwitch />
      </div>
    </div>
  );
}
