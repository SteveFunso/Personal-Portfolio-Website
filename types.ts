export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  impact: string[];
  category: 'Fintech' | 'AI/ML' | 'Security' | 'EdTech';
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  skills: string[];
  logoInitials: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface Metric {
  label: string;
  value: number;
  suffix: string;
  description: string;
}