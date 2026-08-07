
import { Lınk } from "@/shared/components/atoms/Link";

import { ProductDetailHeader } from "../components/ProductDetailHeader";
import { ProductImage } from "../components/ProductDetailmage";
import { ProductDetailnfoSection } from "../components/ProductDetailnfoSection";
import { useProductDetails, useUpdateProduct } from "../hooks/useProducts";

export default function ProductDetailContainer({id}) {

  const productId = Number(id);

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useProductDetails(productId);

  const {
    form,
    isEditing,
    setIsEditing,
    handleChange,
    handleSubmit,
    isUpdating,
  } = useUpdateProduct(product);

  if (isLoading) {
    return (
      <div className="min-h-full bg-white p-6">
        <p className="text-sm text-slate-500">Ürün yükleniyor...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-full bg-white p-6">
        <div className="rounded-xl border border-red-200 bg-red-50 p-5">
          <h2 className="font-medium text-red-700">Ürün yüklenemedi.</h2>

          <p className="mt-1 text-sm text-red-600">
            {error instanceof Error ? error.message : "Bir şeyler ters gitti."}
          </p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-full bg-white p-6">
        <div className="rounded-xl border border-slate-200 bg-white p-10 text-center">
          <h2 className="font-medium text-slate-900">Ürün bulunamadı</h2>

          <div className="mt-4">
            <Lınk desc="← Ürünlere Dön" route="/urunler" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-3">

        <Lınk desc="← Ürünlere Dön" route="/urunler" />


      <div className="rounded-xl border border-slate-200 bg-white">
        <ProductDetailHeader
          name={product.name}
          sku={product.sku}
          isEditing={isEditing}
          onEdit={() => setIsEditing(true)}
        />

        <form onSubmit={handleSubmit}>
          <div className="grid gap-8 p-2 lg:grid-cols-12">

              <ProductImage
                imageUrl={product.imageUrl}
                productName={product.name}
              />
   


            <ProductDetailnfoSection
            form={form}
            product={product}
            isEditing={isEditing}
            isUpdating={isUpdating}
            onEditChange={handleChange}
            onStatusChange={handleChange}
            onCancel={() => setIsEditing(false)}
    
          />
          </div>
        </form>
      </div>
    </div>
  );
}
