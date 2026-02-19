export interface ProjectLink {
  website?: string;
  README?: string;
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
  response: string[];
  links?: ProjectLink[];
}