export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
  featured: boolean;
  color: string;
};

export type Skill = {
  name: string;
  level: number;
  category: string;
  icon: string;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};
