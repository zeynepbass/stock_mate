
import { FieldLabel } from "../../atoms/FieldLabel";

interface EditableInfoProps {
  label: string;
  name: string;
  value: string | number;
  isEditing: boolean;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  type?: string;
}

export function EditableInfo({
  label,
  name,
  value,
  isEditing,
  onChange,
  type = "text",
}: EditableInfoProps) {
  return (
    <div>
      <FieldLabel label={label} />

      {isEditing ? (
        <input
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
        />
      ) : (
        <div className="mt-2 flex min-h-9 items-center">
          <p className="text-sm font-medium text-slate-900">
            {value || "-"}
          </p>
        </div>
      )}
    </div>
  );
}

