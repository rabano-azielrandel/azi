import FeatName from "@/components/featured/FeatName";
import FeatProject from "@/components/featured/FeatProject";
import FeatLink from "@/components/featured/FeatLink";

import { notFound } from "next/navigation";
import { getProjectSpecifiedData } from "@/app/lib/data/projects";

import Image from "next/image";
import Link from "next/link";

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
    <main className="w-full">
      <FeatName name="DIGITAL PAYSLIP" subdesc="WEB APP" />
      <FeatProject />
      <FeatLink link="" />
    </main>
  );
}
