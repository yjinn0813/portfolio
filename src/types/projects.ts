export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  id: number | string;
  title: string;
  subtitle: string;
  type: 'work' | 'team' | 'personal';
  tier: 'primary' | 'secondary';
  image: string[];
  peroid: string;
  team: string | number;
  descript: string;
  skills: string[];
  role?: string[];
  contribute: string[];
  links?: ProjectLink[];
}