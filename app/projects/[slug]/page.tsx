import FeatName from "@/components/featured/FeatName";
import FeatProject from "@/components/featured/FeatProject";
import FeatLink from "@/components/featured/FeatLink";
import FeatTake from "@/components/featured/FeatTake";

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
    <main className="w-full text-theme1-secondary">
      <FeatName name={projectData.name} />
      <FeatProject
        feat_words={projectData.feat_words}
        feat_icons={projectData.feat_icons}
        feat_bgcolor={projectData.feat_bgcolor}
        feat_textcolor={projectData.feat_textcolor}
      />
      <FeatLink link="" />
      <FeatTake />
    </main>
  );
}
