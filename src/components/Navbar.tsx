import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import clsx from 'clsx';
import { navItems } from '@/lib/data';
import { useScrollSpy } from '@/hooks/useScrollSpy';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = navItems.map((n) => n.href.replace('#', ''));
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[#0f0f1a]/95 backdrop-blur-md border-b border-[#6366f1]/20 shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('#home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center glow">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg text-white group-hover:text-[#818cf8] transition-colors">
            Alex<span className="text-[#6366f1]">.</span>dev
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const id = item.href.replace('#', '');
            return (
              <li key={item.label}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className={clsx(
                    'nav-link text-sm font-medium transition-colors',
                    active === id ? 'text-[#818cf8]' : 'text-slate-300 hover:text-white'
                  )}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#contact')}
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-lg bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-medium transition-all duration-200 hover:shadow-lg hover:shadow-[#6366f1]/30"
        >
          Hire Me
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0f0f1a]/98 backdrop-blur-md border-b border-[#6366f1]/20">
          <ul className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="w-full text-left text-slate-300 hover:text-[#818cf8] py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full mt-2 px-4 py-2 rounded-lg bg-[#6366f1] text-white text-sm font-medium"
              >
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
