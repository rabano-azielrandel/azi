import Image from "next/image";
import HobbiesCard from "./ui/HobbiesCard";

export default function HobbiesContentMobile() {
  return (
    <div className="lg:hidden w-full flex flex-col gap-4 mt-4">
      {/* cards */}
      {[...Array(4)].map((item, index) => (
        <HobbiesCard key={index} index={index} />
      ))}
    </div>
  );
}
