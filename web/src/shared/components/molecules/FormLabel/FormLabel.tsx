
import { Input } from "../../atoms/Input";

interface FormLabelProps {
  label: string;
  type?: string;
  value: string | number;
  placeholder?: string;
  min?: string;
  step?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

export function FormLabel({
  label,
  type = "text",
  value,
  placeholder,
  min,
  step,
  onChange,
}: FormLabelProps) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <Input
        type={type}
        value={value}
        placeholder={placeholder}
        min={min}
        step={step}
        onChange={onChange}
      />
    </div>
  );
}
