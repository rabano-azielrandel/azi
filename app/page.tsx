import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full max-w-full overflow-hidden">
      <Hero />
      <Projects />
      <Experience />
      <Hobbies />
    </main>
  );
}
