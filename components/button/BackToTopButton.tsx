"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function BackToTopButton() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10 && window.innerWidth <= 425) {
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`${isScrolled ? "opacity-100" : "opacity-0"}
        fixed bottom-6 right-6 p-3 rounded-full light:bg-gray-300 bg-[#f7f7f7] 
        shadow-lg transition-colors duration-300 light:hover:bg-[#f7f7f7] hover:bg-gray-300 z-50`}
      aria-label="Back to top"
    >
      <Image
        src={"/images/to-top.png"}
        alt="arrow-up"
        width={50}
        height={50}
        className="object-contain w-5 h-5"
      />
    </button>
  );
}
