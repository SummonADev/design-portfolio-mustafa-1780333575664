import { useInView } from '@/hooks/useInView';
import SectionTitle from '@/components/SectionTitle';
import { Download, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import clsx from 'clsx';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Happy Clients', value: '30+' },
  { label: 'GitHub Stars', value: '2k+' },
];

const timeline = [
  {
    year: '2023 – Present',
    role: 'Senior Full-Stack Engineer',
    place: 'TechCorp Inc.',
    icon: Briefcase,
    color: '#6366f1',
  },
  {
    year: '2021 – 2023',
    role: 'Full-Stack Developer',
    place: 'StartupXYZ',
    icon: Briefcase,
    color: '#f59e0b',
  },
  {
    year: '2019 – 2021',
    role: 'Frontend Engineer',
    place: 'DigitalAgency',
    icon: Briefcase,
    color: '#10b981',
  },
  {
    year: '2015 – 2019',
    role: 'B.Sc. Computer Science',
    place: 'MIT',
    icon: GraduationCap,
    color: '#818cf8',
  },
];

export default function About() {
  const [ref, inView] = useInView();

  return (
    <section id="about" className="py-24 bg-[#0f0f1a] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="About Me"
          title="Who I Am"
          subtitle="A passionate engineer who loves turning ideas into reality through clean code and thoughtful design."
        />

        <div
          ref={ref}
          className={clsx(
            'grid md:grid-cols-2 gap-12 items-start transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Left — Bio */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-slate-400 text-sm">
              <MapPin size={15} className="text-[#6366f1]" />
              <span>San Francisco, CA</span>
            </div>

            <p className="text-slate-300 leading-relaxed">
              I'm a full-stack developer and UI/UX designer with over 5 years of experience
              building products that people love. I specialize in React ecosystems, Node.js
              backends, and cloud infrastructure.
            </p>
            <p className="text-slate-400 leading-relaxed">
              When I'm not coding, I contribute to open-source projects, write technical
              articles, and mentor junior developers. I believe in writing software that is
              not only functional but also maintainable and accessible.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-[#1a1a2e] border border-white/5 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-black text-white mb-1">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-[#6366f1]/30"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>

          {/* Right — Timeline */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-6">Career Timeline</h3>
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}40` }}
                    >
                      <Icon size={15} style={{ color: item.color }} />
                    </div>
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 mt-2 bg-white/5" />
                    )}
                  </div>
                  <div className="pb-6">
                    <div className="text-xs text-slate-500 mb-0.5">{item.year}</div>
                    <div className="text-white font-medium">{item.role}</div>
                    <div className="text-sm text-slate-400">{item.place}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
