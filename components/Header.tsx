"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import ThemeSwitch from "./ui/ThemeSwitch";

const navLinks = [
  { text: "Me", href: "#me", img: "/images/mobile-home.png" },
  { text: "Projects", href: "#projects", img: "/images/mobile-projects1.png" },
  { text: "Experience", href: "#experience", img: "/images/mobile-exp.png" },
  { text: "Hobbies", href: "#hobbies", img: "/images/mobile-hobbies.png" },
  { text: "Contacts", href: "#contacts", img: "/images/mobile-contacts.png" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

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

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="lg:hidden"
        >
          <Image
            src="/images/hamburger.png"
            alt="hamburger"
            width={30}
            height={30}
            className={`invert light:invert-0 object-cover w-[20px] h-[20px] cursor-pointer`}
          />
        </button>

        {/* mobile menu */}
        <div
          className={`${
            isCollapsed
              ? "fixed top-0 right-0 w-[50%] h-screen px-4 py-14 flex flex-col justify-between lg:hidden"
              : "hidden"
          } z-10 text-white light:text-black bg-[#0A0A0A] light:bg-[#F7F7F7]`}
        >
          {/* Header */}
          <div className="w-full flex items-center gap-4">
            <Image
              src="/images/mobile-menu.png"
              alt="hamburger"
              width={30}
              height={30}
              className={`light:invert-0 invert object-cover w-[20px] h-[20px]`}
            />
            <p>Menu</p>
          </div>

          {/* Navs */}
          <div className="w-full">
            <ul className="flex flex-col gap-8">
              {navLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="flex items-center gap-4"
                >
                  <li className="flex items-center gap-4">
                    <Image
                      src={item.img}
                      alt={item.img}
                      width={30}
                      height={30}
                      className={`light:invert-0 invert object-cover w-[30px] h-[30px]`}
                    />
                    <p>{item.text}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>

          {/* Hide */}
          <div className="w-full">
            <button
              onClick={() => setIsCollapsed(!isCollapsed)}
              className="w-full rounded-md border cursor-pointer"
            >
              Hide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
