export interface Course {
  id: string;
  title: string;
  progress: number;
  icon_name: string;
  created_at: string;
}

export interface Student {
  name: string;
  streak: number;
  avatar?: string;
}

export interface ActivityDay {
  date: string;
  count: number;
}

export type NavItem = {
  label: string;
  icon: string;
  href: string;
};
