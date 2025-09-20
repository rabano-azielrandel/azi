import Hero from "@/components/Hero";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full max-w-full overflow-hidden">
      <Hero />
      <div className="h-[1000px]"> </div>
    </main>
  );
}
