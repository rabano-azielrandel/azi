import { main } from "framer-motion/client";
import Image from "next/image";
import React from "react";

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
  "/images/linkedin.png",
  "/images/github.png",
  "/images/facebook.png",
  "/images/cv.png",
];

const Contacts = () => {
  return (
    <main
      id="contacts"
      className="relative mt-8 mb-12 w-full px-4 h-[700px] overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-[1360px] h-full mx-auto p-4 gap-12 flex flex-col justify-center items-center">
        <div className="w-full h-screen flex flex-col justify-center items-center gap-8">
          <p className="text-6xl font-oswald text-theme1-secondary">
            Get in touch
          </p>
          <div className="w-full h-full flex ">
            {/* ICONS AND OTHER INFO */}
            <div className="w-full h-full flex flex-col gap-12">
              <div className="w-full h-fit flex flex-col gap-12 p-2">
                {contact.map((src, idx) => (
                  <div key={idx} className="flex">
                    <Image
                      src={src.Image}
                      alt={src.Image}
                      height={60}
                      width={60}
                      draggable={false}
                      className="invert"
                    />

                    <div className="w-full flex flex-col justify-center items-start pl-6 font-inter text-theme1-secondary">
                      <p className="text-sm font-extrabold">{src.Title}</p>
                      <p className="text-xs font-light">{src.Subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex pl-4 gap-4">
                {socials.map((src, idx) => (
                  <Image
                    key={idx}
                    src={src}
                    alt={src}
                    height={20}
                    width={20}
                    draggable={false}
                    className="invert"
                  />
                ))}
              </div>
            </div>

            <div className="w-full h-full">
              <form className="w-[80%] h-full flex flex-col justify-start items-start gap-8">
                <input
                  id="name"
                  type="text"
                  className="w-full px-3 py-2 rounded-md text-white border border-theme1-secondary focus:border-theme-accent1 focus:outline-none"
                  placeholder="Name"
                  required
                />

                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 rounded-md text-white border border-theme1-secondary focus:border-theme-accent1 focus:outline-none"
                  placeholder="Email"
                  required
                />

                <input
                  id="subject"
                  type="subject"
                  className="w-full px-3 py-2 rounded-md text-white border border-theme1-secondary focus:border-theme-accent1 focus:outline-none"
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
    </main>
  );
};

export default Contacts;
