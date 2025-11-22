import Image from "next/image";
import HobbiesCard from "./ui/HobbiesCard";

const hobbies = [
  {
    tag: "Anime",
    title: "SAKAMOTO DAYS",
    img: "/images/anime1.jpg",
    p: "Sakamoto Days is my favorite anime because the action is nonstop and the characters are unforgettable. Every episode feels fresh and full of energy.",
    rating: 9.7,
  },
  {
    tag: "Anime",
    title: "CHAINSAW MAN",
    img: "/images/anime2.jpg",
    p: "Chainsaw Man stands out as my favorite anime with its brutal action and emotional storytelling. Makima’s calm but commanding aura adds a haunting layer that keeps me hooked.",
    rating: 9.5,
  },
  {
    tag: "Anime",
    title: "DEMON SLAYER",
    img: "/images/anime3.jpg",
    p: "I love Shinobu’s macro because she knew she couldn’t beat Upper Rank Two head-on, so she trained for a year to turn herself into poison.",
    rating: 9.3,
  },
  {
    tag: "Anime",
    title: "JUJUTSU KAISEN",
    img: "/images/anime4.jpg",
    p: "Jujutsu Kaisen stands out as my favorite anime with its mix of dark themes and epic fights. Geto’s calm yet formidable personality makes every encounter with him unforgettable.",
    rating: 9.8,
  },
];

export default function HobbiesContentMobile() {
  return (
    <div className="lg:hidden w-full flex flex-col gap-4 mt-4">
      {/* cards */}
      {hobbies.map((item, index) => (
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
