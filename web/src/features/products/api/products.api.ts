import apiClient from "../../../lib/apiClient";

import type {
  Product,
  ProductListResponse,
} from "../types/product.types";

export async function getProducts(
  page: number,
  pageSize: number,
  search?: string,
  categoryId?: number,
  brandId?: number
): Promise<ProductListResponse> {
  const response =
    await apiClient.get<ProductListResponse>(
      "/products",
      {
        params: {
          page,
          pageSize,
          search,
          categoryId,
          brandId,
        },
      }
    );

  return response.data;
}

export async function getProduct(
  id: number
): Promise<Product> {
  const response =
    await apiClient.put<Product>(
      `/products/${id}`
    );

  return response.data;
}
export async function updateProduct(
  id: string,
  data: {
    name?: string;
    price?: number;
    stock?: number;
    status?: number;
  }
) {
  const response = await apiClient.put(`/products/${id}`, data);

  return response.data;
}