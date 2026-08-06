export function FieldLabel({ label }: { label: string }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
      {label}
    </p>
  );
}