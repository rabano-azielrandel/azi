import { createSupabaseServerClient } from "../supabase/server";
import { Project, ProjectCardData } from "@/types/Projects";

export async function getProjectData(): Promise<ProjectCardData[][]> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("Projects")
    .select("*")
    .order("row_index")
    .order("col_index");

  if (error) throw error;
  if (!data) return [];

  const projects = data as Project[];
  const rows: ProjectCardData[][] = [];

  projects.forEach((item) => {
    const rowIndex = item.row_index;
    if (!rows[rowIndex]) rows[rowIndex] = [];

    rows[rowIndex].push({
      id: `${item.row_index}-${item.col_index}`,
      row_index: item.row_index,
      col_index: item.col_index,
      span: item.span,
      className: item.class_name ?? undefined,
      variant: item.variant,
      title: item.title ?? undefined,
      desc: item.description ?? undefined,
    });
  });

  return rows;
}