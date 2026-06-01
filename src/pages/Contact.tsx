import { useState } from 'react';
import SectionTitle from '@/components/SectionTitle';
import { useInView } from '@/hooks/useInView';
import { Mail, Send, MapPin, Clock, CheckCircle2, Github, Linkedin, Twitter } from 'lucide-react';
import clsx from 'clsx';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function Contact() {
  const [ref, inView] = useInView();
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: any) => {
    const { name, value } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const inputClass =
    'w-full bg-[#1a1a2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#6366f1]/60 focus:ring-1 focus:ring-[#6366f1]/30 transition-all';

  return (
    <section id="contact" className="py-24 bg-[#0a0a14] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6366f1]/30 to-transparent" />

      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#6366f1]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div
          ref={ref}
          className={clsx(
            'grid md:grid-cols-2 gap-12 transition-all duration-700',
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Left — Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-white font-semibold text-xl mb-4">Get In Touch</h3>
              <p className="text-slate-400 leading-relaxed">
                I'm currently open to freelance work and full-time positions.
                Whether you have a question or just want to chat — feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'alex@alexdev.io', color: '#6366f1' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA', color: '#f59e0b' },
                { icon: Clock, label: 'Response Time', value: 'Within 24 hours', color: '#10b981' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}15`, border: `1px solid ${color}30` }}
                  >
                    <Icon size={17} style={{ color }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{label}</div>
                    <div className="text-white text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div>
              <p className="text-slate-500 text-xs mb-4">Follow me on</p>
              <div className="flex gap-3">
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
                    className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#6366f1]/40 hover:bg-[#6366f1]/10 transition-all"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[#1a1a2e] border border-white/5 rounded-2xl p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                  <CheckCircle2 size={32} className="text-green-400" />
                </div>
                <h4 className="text-white font-semibold text-lg">Message Sent!</h4>
                <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-2 px-4 py-2 text-sm text-[#818cf8] hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={clsx(inputClass, 'resize-none')}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={clsx(
                    'w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200',
                    status === 'sending'
                      ? 'bg-[#6366f1]/50 text-white/50 cursor-not-allowed'
                      : 'bg-[#6366f1] hover:bg-[#4f46e5] text-white hover:shadow-lg hover:shadow-[#6366f1]/30'
                  )}
                >
                  {status === 'sending' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
