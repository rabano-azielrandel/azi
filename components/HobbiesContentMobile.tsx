import HobbiesCard from "./ui/HobbiesCard";
import { useState } from "react";

const hobbies = [
  [
    {
      tag: "ANIME",
      title: "SAKAMOTO DAYS",
      img: "/images/anime1.jpg",
      p: "Sakamoto Days is my favorite anime because the action is nonstop and the characters are unforgettable. Every episode feels fresh and full of energy.",
      rating: 9.7,
    },
    {
      tag: "ANIME",
      title: "CHAINSAW MAN",
      img: "/images/anime2.jpg",
      p: "Chainsaw Man stands out as my favorite anime with its brutal action and emotional storytelling. Makima’s calm but commanding aura adds a haunting layer that keeps me hooked.",
      rating: 9.5,
    },
    {
      tag: "ANIME",
      title: "DEMON SLAYER",
      img: "/images/anime3.jpg",
      p: "I love Shinobu’s macro because she knew she couldn’t beat Upper Rank Two head-on, so she trained for a year to turn herself into poison.",
      rating: 9.3,
    },
    {
      tag: "ANIME",
      title: "JUJUTSU KAISEN",
      img: "/images/anime4.jpg",
      p: "Jujutsu Kaisen stands out as my favorite anime with its mix of dark themes and epic fights. Geto’s calm yet formidable personality makes every encounter with him unforgettable.",
      rating: 9.8,
    },
  ],
  [
    {
      tag: "MUSIC",
      title: "IV OF SPADES",
      img: "/images/music1.jpg",
      p: "I love IV of Spades for their retro style and creative sound. Zild’s bass riffs are incredible, adding depth and personality that make their music unforgettable.",
      rating: 9.7,
    },
    {
      tag: "MUSIC",
      title: "TWENTY ONE PILOTS",
      img: "/images/music2.jpg",
      p: "I love Twenty One Pilots for their unique sound and thought-provoking songs. Tyler’s talent and presence bring a depth that makes their music hit different.",
      rating: 9.8,
    },
    {
      tag: "MUSIC",
      title: "LiSA",
      img: "/images/music3.jpg",
      p: "Japanese pop is one of my favorite music genres because it combines fun, emotion, and artistry. LiSA (Risa Oribe) is one of my favorite for her anime songs, which always leave a lasting impression.",
      rating: 9.3,
    },
    {
      tag: "MUSIC",
      title: "IU",
      img: "/images/music4.jpg",
      p: "K-pop captures me with its perfect blend of emotion, creativity, and energy. IU stands out with her unique vocals and heartfelt songs that always leave an impression.",
      rating: 9.2,
    },
  ],
  [
    {
      tag: "LEARNING",
      title: "PROGRAMMING",
      img: "/images/code1.jpg",
      p: "I love programming because it allows me to explore ideas and solve problems creatively. Learning online through different resources exposes me to new techniques and perspectives every day.",
      rating: 9.6,
    },
    {
      tag: "LEARNING",
      title: "DATA STRUCTURE",
      img: "/images/code2.jpg",
      p: "I enjoy studying data structures because they bring together logic, patterns, and mathematical reasoning. Exploring how different structures optimize performance makes learning engaging and fulfilling.",
      rating: 9.9,
    },
    {
      tag: "LEARNING",
      title: "ORGANIZING",
      img: "/images/code3.jpg",
      p: "I love having a structured approach to everything, which is why creating to-do lists and planning tasks is one of my hobbies. Staying organized helps me manage my time and focus on what matters most.",
      rating: 9.3,
    },
    {
      tag: "LEARNING",
      title: "READING",
      img: "/images/code4.jpg",
      p: "I enjoy reading documents that are related to programming to deepen my understanding. This habit helps me learn best practices and discover new ways to improve my code.",
      rating: 9.2,
    },
  ],
  [
    {
      tag: "GAMING",
      title: "DELTA FORCE",
      img: "/images/game1.jpg",
      p: "Delta Force is one of the games that I like to play because of its intense missions and tactical gameplay. Operator Tempest is my favorite character, bringing skill and strategy to every battle.",
      rating: 9.6,
    },
    {
      tag: "GAMING",
      title: "VALORANT",
      img: "/images/game2.jpg",
      p: "I enjoy playing Valorant for its strategic gameplay and team-based action. KAY/O stands out with his versatile skills, making every round more exciting and dynamic.",
      rating: 9.9,
    },
    {
      tag: "GAMING",
      title: "NARAKA",
      img: "/images/game3.jpg",
      p: "Naraka is one of my favorite games because of its fast-paced combat and strategic fights. I enjoy playing Wu Chen for his large-scale presence and teleport ability, which can turn the tide of battle.",
      rating: 9.3,
    },
    {
      tag: "GAMING",
      title: "DOTA 2",
      img: "/images/game4.jpg",
      p: "Dota 2 is a game I enjoy for its deep strategy and team-based gameplay. Windranger holds a special place as one of the first heroes I used when learning the game.",
      rating: 9.2,
    },
  ],
];

const hobbiesType = ["Anime", "Music", "Learning", "Gaming"];

export default function HobbiesContentMobile() {
  const [selectedHobby, setSelectedHobby] = useState(0);

  return (
    <div className="lg:hidden w-full flex flex-col gap-4 mt-2">
      {/* navs */}
      <div className="w-full overflow-x-scroll pb-2">
        <div className="flex items-center gap-4">
          {hobbiesType.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedHobby(index)}
              className={`${
                selectedHobby == index
                  ? "bg-theme1-secondary text-theme-accent2 border-theme1-secondary light:bg-black/10 light:text-theme-dark-accent1 light:border-theme1-base"
                  : "text-theme1-secondary light:text-theme-dark-accent1 light:border-black/10"
              } min-w-25 w-25 px-3 text-sm py-1 rounded-full border whitespace-nowrap`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* cards */}
      {hobbies[selectedHobby].map((item, index) => (
        <HobbiesCard
          key={index}
          index={index}
          tag={item.tag}
          title={item.title}
          image={item.img}
          p={item.p}
          rating={item.rating}
        />
      ))}
    </div>
  );
}
