export interface Product {
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

export interface ProductListResponse {
  items: Product[];
  total: number;
  page: number;
  pageSize: number;
}