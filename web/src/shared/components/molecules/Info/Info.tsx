import { FieldLabel } from "../../atoms/FieldLabel";

type InfoProps = {
  label: string;
  value: string | number;
};

export function Info({
  label,
  value,
}: InfoProps) {
  return (
    <div>
      <FieldLabel label={label} />

      <p className="mt-1.5 text-sm font-medium text-slate-900">
        {value}
      </p>
    </div>
  );
}