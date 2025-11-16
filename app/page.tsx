import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Contacts from "@/components/Contacts";

export default function Home() {
  return (
    <main className="w-full h-full min-w-screen max-w-full overflow-x-hidden">
      <Hero />
      <Projects />
      <Experience />
      <Hobbies />
      <Contacts />
    </main>
  );
}
