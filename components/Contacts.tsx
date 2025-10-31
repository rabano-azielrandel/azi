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
      className={`relative w-full px-4 h-[700px] overflow-hidden ${
        isDarkMode
          ? ""
          : "bg-gradient-to-b from-theme2-accent1/40 via-[#3a3f52]/60 to-[#3a3f52]/10"
      }`}
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-12 flex flex-col justify-center items-center">
        <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
          <p className="text-6xl font-oswald text-theme1-secondary select-none cursor-default">
            Get in touch
          </p>
          <div className="w-full flex items-center">
            {/* ICONS AND OTHER INFO */}
            <div className="w-full h-full flex flex-col gap-9">
              <div className="w-full h-fit flex flex-col gap-12 p-2">
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
                      className="transition-transform duration-300 ease-[cubic-bezier(.03,.98,.52,.99)] group-hover:scale-110"
                      style={{
                        filter:
                          "invert(93%) sepia(11%) saturate(234%) hue-rotate(323deg) brightness(100%) contrast(90%)",
                      }}
                    />

                    <div className="w-full flex flex-col justify-center items-start pl-6 font-inter">
                      <p className="text-base font-extrabold text-theme-accent3">
                        {src.Title}
                      </p>
                      <p className="text-sm font-light text-theme-accent4">
                        {src.Subtitle}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-full pl-4">
                <p className="text-xl text-theme1-secondary font-semibold select-none cursor-default">
                  Visit Me
                </p>
              </div>

              <div className="flex pl-4 gap-4">
                {socials.map((src, idx) => (
                  <Link
                    key={idx}
                    href={src.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-200 ease-cubic-bezier(.03, .98, .52, .99) hover:-translate-y-2"
                  >
                    <Image
                      src={src.icon}
                      alt={src.alt}
                      height={25}
                      width={25}
                      draggable={false}
                      className="cursor-pointer"
                      style={{
                        filter:
                          "invert(93%) sepia(11%) saturate(234%) hue-rotate(323deg) brightness(100%) contrast(90%)",
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* FORMS */}
            <div className="w-full h-full">
              <form className="w-[80%] h-full flex flex-col justify-start items-start gap-8">
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 rounded-md text-theme1-secondary border border-theme1-secondary focus:border-theme-accent1 focus:outline-none placeholder:[var(bg-theme-accent4)]"
                  placeholder="Name"
                  required
                />

                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 rounded-md text-theme1-secondary border border-theme1-secondary focus:border-theme-accent1 focus:outline-none"
                  placeholder="Email"
                  required
                />

                <input
                  id="subject"
                  type="subject"
                  className="w-full px-3 py-2 rounded-md text-theme1-secondary border border-theme1-secondary focus:border-theme-accent1 focus:outline-none"
                  placeholder="Subject"
                  required
                />

                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-3 py-2 rounded-md text-white border border-theme1-secondary focus:border-theme-accent1 focus:outline-none resize-none"
                  placeholder="Write your message here..."
                  required
                />

                <button
                  type="submit"
                  className="mt-2 py-2 px-4 rounded-md bg-theme-accent1 text-theme1-base font-medium hover:bg-theme1-accent hover:cursor-pointer transition-colors"
                >
                  Send Message
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
