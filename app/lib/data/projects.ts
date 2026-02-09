import { createSupabaseServerClient } from "../supabase/server";
import { ProjectSpecifiedData } from "@/types/Projects";

export async function getProjectSpecifiedData(
  slug: string
): Promise<ProjectSpecifiedData | null> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("Projects")
    .select("*")
    .eq("slug", slug)
    .single();

  console.log("slug received:", slug);
  console.log("supabase error:", error);
  console.log("supabase data:", data);

  if (error) return null;
  return data as ProjectSpecifiedData;
}