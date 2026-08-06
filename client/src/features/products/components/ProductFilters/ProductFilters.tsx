import { Select } from "@/shared/components/atoms/Select/Select";
import { SearchInput } from "@/shared/components/molecules/SearchInput";

interface SelectOption {
  value: string | number;
  label: string;
}

interface ProductFiltersProps {
  search: string;
  categoryId: string;
  brandId: string;

  categories: SelectOption[];
  brands: SelectOption[];

  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onBrandChange: (value: string) => void;
}

export function ProductFilters({
  search,
  categoryId,
  brandId,
  categories,
  brands,
  onSearchChange,
  onCategoryChange,
  onBrandChange,
}: ProductFiltersProps) {
  return (
    <div className="rounded-t-xl border-t border-slate-200 bg-white p-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Select
            value={categoryId}
            onChange={onCategoryChange}
            placeholder="Kategoriler"
            options={categories}
          />

          <Select
            value={brandId}
            onChange={onBrandChange}
            placeholder="Markalar"
            options={brands}
          />
        </div>

        <SearchInput
          value={search}
          onChange={onSearchChange}
          placeholder="Ürün ara..."
        />
      </div>
    </div>
  );
}