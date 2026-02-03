import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Contacts from "@/components/Contacts";
import { getProjectData } from "./lib/data/portfolio";

export default async function Home() {
  const projectData = await getProjectData();

  return (
    <main className="w-full h-full min-w-screen max-w-full overflow-x-hidden">
      <Hero />
      <Projects rows={projectData} />
      <Experience />
      <Hobbies />
      <Contacts />
    </main>
  );
}
