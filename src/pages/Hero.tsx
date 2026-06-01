import { Github, Linkedin, Twitter, ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { useEffect, useState } from 'react';

const roles = [
  'Full-Stack Developer',
  'UI/UX Designer',
  'Open Source Contributor',
  'Cloud Architect',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0f0f1a]">
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
        {/* Blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366f1]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#f59e0b]/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#818cf8]/8 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="animate-fade-in">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles size={16} className="text-[#f59e0b]" />
            <span className="text-sm text-slate-400 font-mono">Available for hire</span>
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">
            Hi, I'm{' '}
            <span className="gradient-text">Alex Morgan</span>
          </h1>

          <div className="flex items-center gap-2 mb-6 h-10">
            <Terminal size={18} className="text-[#6366f1] flex-shrink-0" />
            <span className="text-xl md:text-2xl font-semibold text-[#818cf8]">
              {displayed}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg">
            I craft elegant, performant web experiences from pixel-perfect UIs to
            scalable backend systems. Turning complex problems into clean solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('projects');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-[#6366f1] hover:bg-[#4f46e5] text-white font-semibold transition-all duration-200 glow hover:shadow-lg hover:shadow-[#6366f1]/40"
            >
              View My Work
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl border border-[#6366f1]/40 text-[#818cf8] hover:border-[#6366f1] hover:text-white font-semibold transition-all duration-200"
            >
              Get In Touch
            </button>
          </div>

          <div className="flex items-center gap-5 mt-10">
            {[
              { href: 'https://github.com', icon: Github, label: 'GitHub' },
              { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
              { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6366f1]/50 hover:bg-[#6366f1]/10 transition-all duration-200"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Right — Avatar Card */}
        <div className="hidden md:flex justify-center items-center">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-72 h-72 rounded-full border-2 border-[#6366f1]/20 animate-pulse-glow flex items-center justify-center">
              <div className="w-60 h-60 rounded-full border border-[#6366f1]/10 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-[#6366f1]/30 flex items-center justify-center overflow-hidden">
                  {/* Avatar placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-[#6366f1]/20 via-[#4f46e5]/10 to-[#f59e0b]/10 flex items-center justify-center">
                    <span className="text-7xl select-none">👨‍💻</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-[#1a1a2e] border border-[#6366f1]/30 rounded-xl px-3 py-2 animate-float">
              <div className="text-xs text-slate-400">Experience</div>
              <div className="text-lg font-bold text-white">5+ Years</div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-[#1a1a2e] border border-[#f59e0b]/30 rounded-xl px-3 py-2" style={{ animationDelay: '1.5s' }}>
              <div className="text-xs text-slate-400">Projects Done</div>
              <div className="text-lg font-bold text-white">50+</div>
            </div>

            <div className="absolute top-1/2 -right-16 -translate-y-1/2 bg-[#1a1a2e] border border-green-500/30 rounded-xl px-3 py-2">
              <div className="text-xs text-slate-400">Clients</div>
              <div className="text-lg font-bold text-white">30+</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500 hover:text-[#818cf8] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={22} />
      </button>
    </section>
  );
}
