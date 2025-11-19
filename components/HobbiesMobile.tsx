import Image from "next/image";
import { Heart } from "lucide-react";
import React from "react";

const HobbiesMobile = () => {
  return (
    <div className="flex flex-col w-full p-2 gap-4">
      <div className="flex flex-col w-full h-[300px] p-2 gap-2 rounded-xl border border-theme1-secondary/20 shadow-2xl bg-[#1A181F]">
        <h3 className="text-lg text-theme-accent3 font-bold">SAKAMOTO DAYS</h3>
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src="/images/anime1.jpg"
            alt="hobby"
            width={100}
            height={100}
            className="object-cover object-[50%_44%] w-full h-full"
          />
        </div>

        <div className="w-full flex  gap-2">
          <p className="text-base text-theme-accent3 font-semibold">Anime</p>
          <Heart color="#f8c98a" size={24} />
        </div>
        <p className="text-sm text-theme-accent4 font-light leading-tight">
          Sakamoto Days is my favorite anime because the action is nonstop and
          the characters are unforgettable. Every episode feels fresh and full
          of energy.
        </p>
      </div>

      <div className="flex flex-col w-full h-[300px] p-2 gap-2 rounded-xl border border-theme1-secondary/20 shadow-2xl bg-[#1A181F]">
        <h3 className="text-lg text-theme-accent3 font-bold">CHAINSAW MAN</h3>
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src="/images/anime2.jpg"
            alt="hobby"
            width={100}
            height={100}
            className="object-cover object-[50%_14%] w-full h-full"
          />
        </div>

        <div className="w-full flex  gap-2">
          <p className="text-base text-theme-accent3 font-semibold">Anime</p>
          <Heart color="#f8c98a" size={24} />
        </div>
        <p className="text-sm text-theme-accent4 font-light leading-tight">
          Chainsaw Man stands out as my favorite anime with its brutal action
          and emotional storytelling. Makima’s calm but commanding aura adds a
          haunting layer that keeps me hooked.
        </p>
      </div>

      <div className="flex flex-col w-full h-[300px] p-2 gap-2 rounded-xl border border-theme1-secondary/20 shadow-2xl bg-[#1A181F]">
        <h3 className="text-lg text-theme-accent3 font-bold">DEMON SLAYER</h3>
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src="/images/anime3.jpg"
            alt="hobby"
            width={100}
            height={100}
            className="object-cover object-[50%_14%] w-full h-full"
          />
        </div>

        <div className="w-full flex  gap-2">
          <p className="text-base text-theme-accent3 font-semibold">Anime</p>
          <Heart color="#f8c98a" size={24} />
        </div>
        <p className="text-sm text-theme-accent4 font-light leading-tight">
          I love Shinobu’s macro because she knew she couldn’t beat Upper Rank
          Two head-on, so she trained for a year to turn herself into poison.
        </p>
      </div>

      <div className="flex flex-col w-full h-[300px] p-2 gap-2 rounded-xl border border-theme1-secondary/20 shadow-2xl bg-[#1A181F]">
        <h3 className="text-lg text-theme-accent3 font-bold">JUJUTSU KAISEN</h3>
        <div className="w-full rounded-lg overflow-hidden">
          <Image
            src="/images/anime4.jpg"
            alt="hobby"
            width={100}
            height={100}
            className="object-cover object-[50%_14%] w-full h-full"
          />
        </div>

        <div className="w-full flex  gap-2">
          <p className="text-base text-theme-accent3 font-semibold">Anime</p>
          <Heart color="#f8c98a" size={24} />
        </div>
        <p className="text-sm text-theme-accent4 font-light leading-tight">
          Jujutsu Kaisen stands out as my favorite anime with its mix of dark
          themes and epic fights. Geto’s calm yet formidable personality makes
          every encounter with him unforgettable.
        </p>
      </div>
    </div>
  );
};

export default HobbiesMobile;
