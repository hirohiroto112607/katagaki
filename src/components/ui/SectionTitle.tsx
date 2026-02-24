interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export default function SectionTitle({ title, subtitle, align = 'center' }: SectionTitleProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      <div className="flex flex-col gap-1.5">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{title}</h2>
        <div
          className={`h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 ${align === 'center' ? 'mx-auto' : ''}`}
        />
      </div>
      {subtitle && <p className="max-w-2xl text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}
