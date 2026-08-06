import type {
  Product,
  ProductListResponse,
} from "../types/product.types";

interface ApiProduct {
  id: number;
  name: string; 
  sku: string;
  barcode: string;
  imageUrl: string;

  categoryId: number;
  categoryName: string;

  brandId: number;
  brandName: string;

  price: number;
  stock: number;
  minStock: number;

  unit: number;
  status: number;

  isFeatured: boolean;

  updatedAt: string;
}

interface ApiProductListResponse {
  items: ApiProduct[];
  total: number;
  page: number;
  pageSize: number;
}

export function productAdapter(
  product: ApiProduct
): Product {
  return {
    id: Number(product.id),
    name: product.name,
    sku: product.sku,
    barcode: product.barcode,
    imageUrl: product.imageUrl,

    categoryId: product.categoryId,
    categoryName: product.categoryName,

    brandId: product.brandId,
    brandName: product.brandName,

    price: product.price,
    stock: product.stock,
    minStock: product.minStock,

    unit: product.unit,
    status: product.status,

    isFeatured: product.isFeatured,

    updatedAt: product.updatedAt,
  };
}

export function productListAdapter(
  response: ApiProductListResponse
): ProductListResponse {
  return {
    items: response.items.map(productAdapter),
    total: response.total,
    page: response.page,
    pageSize: response.pageSize,
  };
}