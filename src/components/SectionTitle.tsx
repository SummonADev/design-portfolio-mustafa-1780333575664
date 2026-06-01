import clsx from 'clsx';

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={clsx('text-center mb-16', className)}>
      <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#6366f1] bg-[#6366f1]/10 px-3 py-1 rounded-full mb-4">
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
