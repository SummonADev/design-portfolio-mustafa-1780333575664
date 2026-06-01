import type { Project, Skill, NavItem } from '@/types';

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description:
      'A full-stack e-commerce app with real-time inventory, Stripe payments, and an admin dashboard. Built with React, Node.js, and PostgreSQL.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'AI Chat Interface',
    description:
      'A ChatGPT-like interface with streaming responses, conversation history, and multi-model support. Integrates OpenAI and Anthropic APIs.',
    tags: ['React', 'TypeScript', 'OpenAI', 'Tailwind', 'Vercel'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: '#f59e0b',
  },
  {
    id: 3,
    title: 'DevOps Dashboard',
    description:
      'A real-time monitoring dashboard for Kubernetes clusters, displaying metrics, logs, and alerts with beautiful visualizations.',
    tags: ['React', 'Go', 'Kubernetes', 'Prometheus', 'WebSockets'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
    color: '#10b981',
  },
  {
    id: 4,
    title: 'Design System',
    description:
      'A comprehensive component library with 50+ components, theming support, and detailed documentation built with Storybook.',
    tags: ['React', 'TypeScript', 'Storybook', 'Figma', 'CSS'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: '#ec4899',
  },
  {
    id: 5,
    title: 'Blockchain Explorer',
    description:
      'An Ethereum blockchain explorer with transaction tracking, wallet analytics, and DeFi protocol insights.',
    tags: ['React', 'Web3.js', 'Ethereum', 'GraphQL', 'D3.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: '#8b5cf6',
  },
  {
    id: 6,
    title: 'Mobile Fitness App',
    description:
      'A cross-platform fitness tracker with workout planning, progress charts, and social features built with React Native.',
    tags: ['React Native', 'Expo', 'Firebase', 'Redux', 'Charts'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
    color: '#14b8a6',
  },
];

export const skills: Skill[] = [
  { name: 'React', level: 95, category: 'Frontend', icon: '⚛️' },
  { name: 'TypeScript', level: 90, category: 'Frontend', icon: '🔷' },
  { name: 'Next.js', level: 88, category: 'Frontend', icon: '▲' },
  { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: '🎨' },
  { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢' },
  { name: 'Python', level: 80, category: 'Backend', icon: '🐍' },
  { name: 'Go', level: 72, category: 'Backend', icon: '🔵' },
  { name: 'PostgreSQL', level: 82, category: 'Backend', icon: '🐘' },
  { name: 'Docker', level: 88, category: 'DevOps', icon: '🐳' },
  { name: 'Kubernetes', level: 75, category: 'DevOps', icon: '☸️' },
  { name: 'AWS', level: 80, category: 'DevOps', icon: '☁️' },
  { name: 'CI/CD', level: 85, category: 'DevOps', icon: '🔄' },
  { name: 'Figma', level: 88, category: 'Design', icon: '🎭' },
  { name: 'UI/UX', level: 85, category: 'Design', icon: '✏️' },
  { name: 'Motion', level: 78, category: 'Design', icon: '🌀' },
  { name: 'Accessibility', level: 82, category: 'Design', icon: '♿' },
];

export const skillCategories = ['Frontend', 'Backend', 'DevOps', 'Design'];
