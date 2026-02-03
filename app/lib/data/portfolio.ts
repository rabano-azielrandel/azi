// FOR PORTFOLIO QUERIES
import { createSupabaseServerClient } from "../supabase/server";

export async function getPortfolioCards() {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase
    .from("Projects")
    .select("*")
    .order("row_index")
    .order("col_index");

  if (error) throw error;

  return data;
}
