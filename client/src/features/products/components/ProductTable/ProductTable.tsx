

import { useNavigate } from "react-router-dom";
import type {
  ProductListResponse,
} from "../../types/product.types";
import { Eye } from "lucide-react";
import { StatusBadge } from "@/shared/components/atoms/StatusBadge/StatusBadge";
interface ProductTableProps {
  products: ProductListResponse;
}

export  function ProductTable({
  products,
}: ProductTableProps) {
  const navigate = useNavigate();
  return (
    <div className=" h-[55vh] overflow-scroll rounded-b-xl border-b  border-slate-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 ">
            <tr>
              <th className="px-5 py-4 font-medium text-slate-600">
                Ürünler
              </th>

              <th className="px-5 py-4 font-medium text-slate-600">
                SKU
              </th>

              <th className="px-5 py-4 font-medium text-slate-600">
                Marka
              </th>

              <th className="px-5 py-4 font-medium text-slate-600">
                Kategori
              </th>

              <th className="px-5 py-4 font-medium text-slate-600">
                Fiyat
              </th>

              <th className="px-5 py-4 font-medium text-slate-600">
                Stok
              </th>

              <th className="px-5 py-4 font-medium text-slate-600">
                Durumu
              </th>

              <th className="px-5 py-4" />
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {products.items.map((product) => {

              return(

     
              <tr
                key={product.id}
                className="transition hover:bg-slate-50"
              >

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="h-10 w-10 rounded-lg object-cover"
                      />
                    ) : (
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-xs text-slate-400">
                        N/A
                      </div>
                    )}

                    <div>
                      <p className="font-medium text-slate-900">
                        {product.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {product.barcode}
                      </p>
                    </div>
                  </div>
                </td>

   
                <td className="px-5 py-4 text-slate-600">
                  {product.sku}
                </td>


                <td className="px-5 py-4 text-slate-600">
                  {product.brandName}
                </td>

   
                <td className="px-5 py-4 text-slate-600">
                  {product.categoryName}
                </td>


                <td className="px-5 py-4 font-medium text-slate-900">
                  {product.price.toLocaleString(
                    "tr-TR",
                    {
                      style: "currency",
                      currency: "TRY",
                    }
                  )}
                </td>


                <td className="px-5 py-4">
                  <div>
                    <span
                      className={
                        product.stock <=
                        product.minStock
                          ? "font-medium text-red-600"
                          : "text-slate-600"
                      }
                    >
                      {product.stock}
                    </span>

                    {product.stock <=
                      product.minStock && (
                      <p className="mt-0.5 text-xs text-red-500">
                        Kritik stok
                      </p>
                    )}
                  </div>
                </td>

     
                <td className="px-5 py-4">
                  <StatusBadge
                    status={product.status}
                  />
                </td>

             
                <td className="px-5 py-4 text-right">
                <button
                type="button"
                onClick={() => {
                  localStorage.setItem(
                    "product",
                    JSON.stringify(product)
                  );
                
                  navigate(`/urunler/${product.id}`);
                }}
                className="font-medium text-slate-900 hover:underline"
              >
              <Eye className="h-4 w-4 text-slate-600 cursor-pointer hover:text-black" />
              </button>
                </td>
              </tr>       
              )
            })}
          </tbody>
        </table>
      </div>


      {products.items.length === 0 && (
        <div className="px-6 py-12 text-center">
          <p className="text-sm font-medium text-slate-900">
            No products found
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Try changing your search or filters.
          </p>
        </div>
      )}


      {products.items.length > 0 && (
        <div className="border-t border-slate-200 px-5 py-4 text-sm text-slate-500">
          Toplam{" "}
          <span className="font-medium text-slate-900">
          {products.total} 
          </span>{" "}
          üründen{" "}
          <span className="font-medium text-slate-900">
          {products.items.length}
          </span>{" "}
          ürün gösteriliyor
        </div>
      )}
    </div>
  );
}

