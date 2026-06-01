import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';
import clsx from 'clsx';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? projects : projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0f0f1a] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      {/* Background blobs */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="My Work"
          title="Featured Projects"
          subtitle="A selection of projects I'm proud of — ranging from side projects to production apps used by thousands."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className={clsx(
              'px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200',
              showAll
                ? 'bg-[#1a1a2e] border border-white/10 text-slate-300 hover:border-[#6366f1]/30 hover:text-white'
                : 'bg-[#6366f1] text-white hover:bg-[#4f46e5] shadow-lg shadow-[#6366f1]/20'
            )}
          >
            {showAll ? 'Show Less' : `View All Projects (${projects.length})`}
          </button>
        </div>
      </div>
    </section>
  );
}
