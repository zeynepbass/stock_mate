export function Select({
  value,
  onChange,
  options,
  placeholder,
  className = "",
}: SelectProps) {



  return (
    <select
      value={value}
      onChange={(event) => {

        onChange(event.target.value);
      }}
      className={`w-36 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-600 outline-none transition focus:border-slate-400 ${className}`}
    >
      <option value="">{placeholder}</option>

      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}