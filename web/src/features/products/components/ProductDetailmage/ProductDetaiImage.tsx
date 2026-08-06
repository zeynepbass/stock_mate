
interface ProductImageProps {
  imageUrl?: string | null;
  productName: string;
}

export function ProductImage({
  imageUrl,
  productName,
}: ProductImageProps) {
  return (
    <div className="lg:col-span-4">
    <div className="border border-gray p-1 border-slate-100 rounded-2xl">
    
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={productName}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
      ) : (
        <div className="flex aspect-square items-center justify-center text-sm text-slate-400">
          Görsel yok
        </div>
      )}
    </div>    </div></div>
  );
}

