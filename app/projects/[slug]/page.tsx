import { notFound } from "next/navigation";
import { getProjectSpecifiedData } from "@/app/lib/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  console.log("PARAMS:", params);
  const projectData = await getProjectSpecifiedData(slug);

  if (!projectData) {
    notFound();
  }

  return (
    <main className="w-full h-full min-w-screen max-w-full overflow-x-hidden">
      <div className="relative mt-10 sm:mt-40 w-full px-4 py-20 bg-gradient-to-b from-theme-accent2 light:bg-gradient-to-b light:from-[#e9f1fa] light:to-[#F6F6F6]/10 -scroll-m-26">
        <h1 className="text-4xl font-bold text-amber-500">
          {projectData?.name ?? "Project not found"}
        </h1>

        <p className="mt-6 text-lg max-w-3xl">{projectData?.description}</p>
      </div>
    </main>
  );
}
