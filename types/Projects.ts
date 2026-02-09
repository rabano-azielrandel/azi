export interface Project {
    row_index: number;
    col_index: number;
    span?: number;
    variant: string;
    title?:string;
    description?: string;
    class_name?: string;
    created_at: string;
    project_slug: string;
}

export interface ProjectCardData {
  id: string;
  row_index: number;
  col_index: number;
  span?: number;
  className?: string;
  variant: string;
  title?: string;
  desc?: string;
  project_slug: string;
}

export interface ProjectSpecifiedData {
  slug: string;
  name: string;
  feat_words?: string[];
  feat_icons?: string[];
  feat_textcolor?: string[];
  feat_bgcolor?: string[];
  repo_link?: string;
  live_link?: string;
  system_desc?: string;
  system_images?: string;
}
