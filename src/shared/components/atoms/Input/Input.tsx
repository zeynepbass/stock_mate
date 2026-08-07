interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export function Input({
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-slate-200 px-3 py-2.5 text-sm outline-none transition focus:border-slate-400 focus:ring-1 focus:ring-slate-100 ${className}`}
    />
  );
}