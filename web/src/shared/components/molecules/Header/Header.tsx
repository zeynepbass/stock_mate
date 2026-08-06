interface HeaderProps {
  title: string;
  desc: string;
}

export function Header({ title, desc }: HeaderProps) {
  return (
    <header className="border-b border-slate-200 bg-white px-6 py-5">
      <h3 className="text-xs tracking-wide text-slate-500">
        {title}
      </h3>

      <h1 className="mt-1 text-xl font-semibold text-slate-900">
        {desc}
      </h1>
    </header>
  );
}