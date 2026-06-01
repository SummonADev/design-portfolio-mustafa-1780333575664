import { ExternalLink, Github } from 'lucide-react';
import clsx from 'clsx';
import type { Project } from '@/types';

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <div
      className={clsx(
        'card-hover rounded-2xl border border-white/5 bg-[#1a1a2e] p-6 flex flex-col gap-4 group',
        'animate-slide-up'
      )}
      style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
    >
      {/* Color accent bar */}
      <div
        className="h-1 w-12 rounded-full group-hover:w-24 transition-all duration-500"
        style={{ backgroundColor: project.color }}
      />

      <h3 className="text-white font-semibold text-lg">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 pt-1">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
        >
          <Github size={15} />
          <span>Code</span>
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-[#818cf8] hover:text-white transition-colors"
        >
          <ExternalLink size={15} />
          <span>Live Demo</span>
        </a>
      </div>
    </div>
  );
}
