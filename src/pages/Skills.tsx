import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { useInView } from '@/hooks/useInView';
import { skills, skillCategories } from '@/lib/data';
import clsx from 'clsx';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');
  const [ref, inView] = useInView();

  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="My Skills"
          title="Technologies I Use"
          subtitle="A curated set of tools and technologies I've mastered through real-world projects."
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {skillCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200',
                activeCategory === cat
                  ? 'bg-[#6366f1] text-white shadow-lg shadow-[#6366f1]/30'
                  : 'bg-[#1a1a2e] text-slate-400 hover:text-white border border-white/5 hover:border-[#6366f1]/30'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className={clsx(
                'bg-[#1a1a2e] border border-white/5 rounded-xl p-5 transition-all duration-500',
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                </div>
                <span className="text-slate-400 text-xs font-mono">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-bar-fill"
                  style={{ width: inView ? `${skill.level}%` : '0%' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Extra badges */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-6">Also familiar with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GraphQL', 'Redis', 'MongoDB', 'Terraform', 'GitHub Actions',
              'Jest', 'Cypress', 'Playwright', 'gRPC', 'WebSockets',
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg bg-[#1a1a2e] border border-white/5 text-slate-400 text-xs hover:border-[#6366f1]/30 hover:text-[#818cf8] transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
