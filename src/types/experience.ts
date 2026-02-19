// 프로젝트 타입
export interface Project {
  id: number; // JSON에서 숫자
  period: string;
  name: string;
  stack: string[];
  details: string[];
}

// 링크 타입
export interface LinkItem {
  label: string;
  url: string;
}

// 경험/교육 데이터 타입
export interface ExperienceDataItem {
  id: number;
  period: string;
  title: string;
  type: 'study' | 'work';
  description?: string[];
  links?: LinkItem[];
  projects?: Project[];
}
