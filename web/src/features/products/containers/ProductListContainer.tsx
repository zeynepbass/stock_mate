import { useProducts } from "../hooks/useProducts";
import { ProductFilters } from "../components/ProductFilters";
import { ProductTable } from "../components/ProductTable";
import { ProductPagination } from "../components/ProductPagination";

export default function ProductListContainer() {
  const {
    data,
    products,
    categories,
    brands,

    search,
    categoryId,
    brandId,
    page,

    isLoading,
    isError,
    error,

    totalPages,

    onSearchChange,
    onCategoryChange,
    onBrandChange,
    onPageChange,
  } = useProducts();

  if (isLoading) {
    return (
      <div className="p-6">
        <p className="text-sm text-slate-500">
          Ürünler yükleniyor...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-6">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-600">
            {error instanceof Error
              ? error.message
              : "Ürünler yüklenemedi."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
    <ProductFilters
    search={search}
    categoryId={categoryId}
    brandId={brandId}
    categories={categories}
    brands={brands}
    onSearchChange={onSearchChange}
    onCategoryChange={onCategoryChange}
    onBrandChange={onBrandChange}
  />

      {products.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-12 text-center">
          <h3 className="font-medium text-slate-900">
            Hiçbir ürün bulunamadı.
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            Arama veya filtrelerinizi değiştirmeyi deneyin.
          </p>
        </div>
      ) : (
        <>
          <ProductTable
            products={{
              ...data!,
              items: products,
            }}
          />

          <ProductPagination
            page={page}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </>
      )}
    </div>
  );
}