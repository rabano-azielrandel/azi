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

  return (
    <div className="absolute lg:fixed top-0 z-50 w-full px-4 pt-[20px] lg:pt-[30px]">
      <div
        className={`
          w-full h-[50px] lg:max-w-fit px-0 lg:px-6 py-2 
          rounded-2xl mx-auto flex items-center justify-start lg:justify-center gap-4 lg:gap-10 lg:border
          shadow-[rgba(0,0,0,0.19)_0px_10px_20px,rgba(0,0,0,0.23)_0px_6px_6px] p-4
          transition-all duration-300 ease-in-out
          ${
            isScrolled
              ? "lg:bg-theme1-base lg:border-white/10 light:lg:bg-[#e9f1fa] light:lg:border-black/20"
              : "bg-transparent border-transparent"
          }
        `}
      >
        <Link href={""}>
          <span
            className={`font-extrabold text-[#f3eaea] text-[20px] tracking-[0px] transition-all font-oswald italic group`}
          >
            <span
              className={`text-[#e8d8c9] group-hover:text-theme1-accent light:text-theme1-base light:group-hover:text-theme-dark-accent1 transition-all`}
            >
              Aziel
            </span>
            <span className={`text-[#f6ad49] light:text-[#737086]`}>.</span>
            <span
              className={`text-theme1-accent group-hover:text-[#e8d8c9] light:text-theme-dark-accent1 light:group-hover:text-theme1-base 
                transition-all duration-300 ease-in-out`}
            >
              Randel
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex gap-4 group/one">
          {navLinks.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative text-[14px] group-hover/one:opacity-50 group hover:opacity-100 transition-all duration-200 ease-in-out
                text-theme1-secondary light:text-theme1-base `}
            >
              {item.text}

              {/* hover */}
              <div
                className={`group-hover:w-full w-0 h-[2px] bg-theme1-secondary light:bg-theme1-base absolute left-0 -bottom-1 transition-all duration-200 ease-in-out rounded-full`}
              />
            </Link>
          ))}
        </nav>

        <ThemeSwitch />

        <button className="lg:hidden">
          <Image
            src="/images/hamburger.png"
            alt="hamburger"
            width={30}
            height={30}
            className={` invert object-cover w-[20px] h-[20px]`}
          />
        </button>
      </div>
    </div>
  );
}
