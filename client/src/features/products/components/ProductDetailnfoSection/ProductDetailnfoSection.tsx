
import { EditableInfo } from "@/shared/components/molecules/EditableInfo";
import { FieldLabel } from "@/shared/components/atoms/FieldLabel";
import { StatusBadge } from "@/shared/components/atoms/StatusBadge";

interface ProductInfoSectionProps {
  form: {
    name: string;
    price: string | number;
    stock: string | number;
    status: number;
  };

  product: {
    status: number;
    sku: string;
    barcode?: string | null;
    brandName?: string | null;
    categoryName?: string | null;
    minStock: number;
    unit: number;
    isFeatured: boolean;
    updatedAt: string;
  };

  isEditing: boolean;
  isUpdating: boolean;

  onEditChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;

  onStatusChange: (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => void;

  onCancel: () => void;
}

export function ProductDetailnfoSection({
  form,
  product,
  isEditing,
  isUpdating,
  onEditChange,
  onStatusChange,
  onCancel,
}: ProductInfoSectionProps) {
  return (
    <div className="lg:col-span-8">
      <div className="mb-7 flex items-start justify-between border-b border-slate-100 pb-5">
        <div>
          <h2 className="text-md font-semibold text-slate-900">
            Ürün Bilgileri
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Ürünün temel bilgilerini görüntüleyebilir ve
            düzenleyebilirsiniz.
          </p>
        </div>

        {isEditing && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onCancel}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              İptal
            </button>

            <button
              type="submit"
              disabled={isUpdating}
              className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isUpdating
                ? "Güncelleniyor..."
                : "Kaydet"}
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-2 sm:grid-cols-2">
        <EditableInfo
          label="Ürün Adı"
          name="name"
          value={form.name}
          isEditing={isEditing}
          onChange={onEditChange}
        />

        <EditableInfo
          label="Fiyat"
          name="price"
          value={form.price}
          type="number"
          isEditing={isEditing}
          onChange={onEditChange}
        />

        <EditableInfo
          label="Stok"
          name="stock"
          value={form.stock}
          type="number"
          isEditing={isEditing}
          onChange={onEditChange}
        />

        <div>
          <FieldLabel label="Durum" />

          {isEditing ? (
            <select
              name="status"
              value={form.status}
              onChange={onStatusChange}
              className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-2 py-2 text-sm text-slate-700 outline-none transition focus:border-slate-400 focus:ring-2 focus:ring-slate-100"
            >
              <option value={1}>Aktif</option>
              <option value={2}>Pasif</option>
              <option value={3}>
                Üretim Durduruldu
              </option>
            </select>
          ) : (
            <div className="mt-2">
              <StatusBadge status={product.status} />
            </div>
          )}
        </div>

        <Info
          label="SKU"
          value={product.sku}
        />

        <Info
          label="Barkod"
          value={product.barcode || "-"}
        />

        <Info
          label="Marka"
          value={product.brandName || "-"}
        />

        <Info
          label="Kategori"
          value={product.categoryName || "-"}
        />

        <Info
          label="Minimum Stok"
          value={String(product.minStock)}
        />

        <Info
          label="Birim"
          value={String(product.unit)}
        />

        <Info
          label="Öne Çıkan"
          value={product.isFeatured ? "Evet" : "Hayır"}
        />

        <Info
          label="Son Güncelleme"
          value={new Date(
            product.updatedAt
          ).toLocaleString("tr-TR")}
        />
      </div>
    </div>
  );
}

interface InfoProps {
  label: string;
  value: string;
}

function Info({ label, value }: InfoProps) {
  return (
    <div>
      <FieldLabel label={label} />

      <p className="mt-1.5 text-sm font-medium text-slate-900">
        {value}
      </p>
    </div>
  );
}

