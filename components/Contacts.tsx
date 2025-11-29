"use client";

import { main } from "framer-motion/client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useTheme } from "@/app/ThemeProvider";

const contact = [
  {
    Image: "/images/email.png",
    Title: "Email Address",
    Subtitle: "rabano.azielrandel@gmail.com",
  },
  {
    Image: "/images/phone.png",
    Title: "Phone Number",
    Subtitle: "+639213945022",
  },
  {
    Image: "/images/location.png",
    Title: "Home Address",
    Subtitle: "Abucay, Bataan, Philippines",
  },
];

const socials = [
  {
    href: "https://www.linkedin.com/in/aziel-randel-rabano",
    icon: "/images/linkedin.png",
    alt: "icon",
  },
  {
    href: "https://www.facebook.com/azielrandel.rabano",
    icon: "/images/facebook.png",
    alt: "icon",
  },
  {
    href: "/files/Mr._Rabano_CV.pdf",
    icon: "/images/cv.png",
    alt: "icon",
  },

  {
    href: "https://github.com/rabano-azielrandel",
    icon: "/images/github.png",
    alt: "icon",
  },
];

const Contacts = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <section
      id="contacts"
      className={`relative w-full px-4 py-20  overflow-hidden ${
        isDarkMode ? "bg-theme1-base" : "bg-[#1e1f23]"
      }`}
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 flex flex-col items-center">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <h2
            className={`text-4xl font-oswald font-semibold text-center tracking-[8px] ${
              isDarkMode ? "text-theme1-secondary" : "text-theme-dark-accent1"
            } select-none cursor-default`}
          >
            CONTACTS
          </h2>
          <div className="w-full h-full flex flex-col lg:flex-row items-start justify-start gap-4">
            {/* ICONS AND OTHER INFO */}
            <div className="w-full h-full flex flex-col justify-between items-center gap-9 px-8  lg:items-start">
              <div className="w-fit h-fit flex flex-col gap-12">
                {contact.map((src, idx) => (
                  <div
                    key={idx}
                    className="flex items-center group cursor-pointer transition-all duration-300 ease-[cubic-bezier(.03,.98,.52,.99)]"
                  >
                    <Image
                      src={src.Image}
                      alt={src.Image}
                      height={60}
                      width={60}
                      draggable={false}
                      className="w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] transition-transform duration-300 ease-[cubic-bezier(.03,.98,.52,.99)] group-hover:scale-110"
                      style={{
                        filter: isDarkMode
                          ? "invert(93%) sepia(11%) saturate(234%) hue-rotate(323deg) brightness(100%) contrast(90%)"
                          : "none",
                      }}
                    />

                    <div className="w-full flex flex-col justify-center items-start pl-6 font-inter">
                      <p
                        className={`text-sm lg:text-base font-extrabold ${
                          isDarkMode
                            ? "text-theme-accent3"
                            : "text-theme-dark-accent1"
                        }`}
                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.22)" }}
                      >
                        {src.Title}
                      </p>
                      <p
                        className={`text-[12px] lg:text-sm font-light ${
                          isDarkMode
                            ? "text-theme-accent4"
                            : "text-theme1-secondary"
                        }`}
                        style={{ textShadow: "0 1px 2px rgba(0,0,0,0.22)" }}
                      >
                        {src.Subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CONNECT WITH ME */}
              <div className="w-full flex justify-center lg:justify-start">
                <p
                  className={`txt-xl font-semibold select-none cursor-default ${
                    isDarkMode
                      ? "text-theme1-secondary"
                      : "text-theme-dark-accent1"
                  }`}
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.22)" }}
                >
                  Connect With Me
                </p>
              </div>

              <div className="flex gap-4 justify-center">
                {socials.map((src, idx) => (
                  <Link
                    key={idx}
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` ${
                      isDarkMode
                        ? "border-theme1-secondary"
                        : "border-theme-dark-accent1"
                    } group relative flex items-center justify-center
                      h-12 w-12 rounded-full border`}
                  >
                    {/* Inner filled circle */}
                    <div
                      className={` ${
                        isDarkMode ? "bg-theme1-secondary" : "bg-theme1-base"
                      } flex items-center justify-center 
                        h-9 w-9 rounded-full
                        transition duration-200 group-hover:scale-110`}
                    >
                      <Image
                        src={src.icon}
                        alt={src.alt}
                        height={20}
                        width={20}
                        draggable={false}
                        className="w-[18px] h-[18px]"
                        style={{
                          filter: isDarkMode
                            ? "none"
                            : "invert(93%) sepia(11%) saturate(234%) hue-rotate(323deg) brightness(100%) contrast(90%)",
                        }}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* FORMS */}
            <div className="w-full h-full flex flex-col justify-center items-center gap-6 mt-10 lg:mt-0">
              <p
                className={`txt-xl font-semibold select-none cursor-default ${
                  isDarkMode
                    ? "text-theme1-secondary"
                    : "text-theme-dark-accent1"
                }`}
                style={{ textShadow: "0 1px 2px rgba(0,0,0,0.22)" }}
              >
                Send Me an Email
              </p>

              <form className="w-[80%] h-full flex flex-col lg:justify-start lg:items-start gap-8">
                <input
                  id="name"
                  type="text"
                  className={`w-full px-3 py-2 rounded-md focus:outline-none border ${
                    isDarkMode
                      ? "text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary focus:border-theme-accent1"
                      : "text-theme1-secondary placeholder-theme-dark-accent1 border-theme1-secondary focus:border-theme-dark-accent1"
                  }`}
                  placeholder="Name"
                  required
                />

                <input
                  id="email"
                  type="email"
                  className={`w-full px-3 py-2 rounded-md focus:outline-none border ${
                    isDarkMode
                      ? "text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary focus:border-theme-accent1"
                      : "text-theme1-secondary placeholder-theme-dark-accent1 border-theme1-secondary focus:border-theme-dark-accent1"
                  }`}
                  placeholder="Email"
                  required
                />

                <input
                  id="subject"
                  type="subject"
                  className={`w-full px-3 py-2 rounded-md focus:outline-none border ${
                    isDarkMode
                      ? "text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary focus:border-theme-accent1"
                      : "text-theme1-secondary placeholder-theme-dark-accent1 border-theme1-secondary focus:border-theme-dark-accent1"
                  }`}
                  placeholder="Subject"
                  required
                />

                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-3 py-2 rounded-md resize-none focus:outline-none border ${
                    isDarkMode
                      ? "text-theme1-secondary placeholder-theme1-secondary border-theme1-secondary focus:border-theme-accent1"
                      : "text-theme1-secondary placeholder-theme-dark-accent1 border-theme1-secondary focus:border-theme-dark-accent1"
                  }`}
                  placeholder="Write your message here..."
                  required
                />

                <button
                  type="submit"
                  className={`mt-2 py-2 px-4 rounded-md text-theme1-base font-medium hover:text-white hover:cursor-pointer transition-colors 
                    border  ${
                      isDarkMode
                        ? "border-white bg-theme1-secondary hover:bg-theme1-base  "
                        : "border-theme-dark-accent1 bg-[#F7F7F7] hover:bg-[#1e1f23] "
                    }`}
                >
                  Send Email
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
