export interface Project {
    row_index: number;
    col_index: number;
    span?: number;
    variant: string;
    title?:string;
    description?: string;
    class_name?: string;
    created_at: string;
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
}
