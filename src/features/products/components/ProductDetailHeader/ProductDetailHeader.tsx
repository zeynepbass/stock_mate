
import { Pencil } from "lucide-react";

interface ProductDetailHeaderProps {
  name: string;
  sku: string;
  isEditing: boolean;
  onEdit: () => void;
}

export function ProductDetailHeader({
  name,
  sku,
  isEditing,
  onEdit,
}: ProductDetailHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
      <div>
        <h1 className="text-xl font-semibold text-slate-900">
          {name}
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          SKU: {sku}
        </p>
      </div>

      {!isEditing && (
        <button
          type="button"
          onClick={onEdit}
          className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800"
        >
          <Pencil className="h-4 w-4" />
          Düzenle
        </button>
      )}
    </div>
  );
}

