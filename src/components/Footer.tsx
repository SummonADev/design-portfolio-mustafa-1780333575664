import { Github, Twitter, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0a0a14] border-t border-white/5 py-10 mt-0">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-500 text-sm flex items-center gap-1">
          Built with <Heart size={13} className="text-[#6366f1] fill-[#6366f1]" /> by Alex Morgan &mdash; {new Date().getFullYear()}
        </div>
        <div className="flex items-center gap-4">
          {[
            { href: 'https://github.com', icon: Github, label: 'GitHub' },
            { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
            { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-slate-500 hover:text-[#818cf8] transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
