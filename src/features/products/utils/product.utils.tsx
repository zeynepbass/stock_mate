import type { Product } from "../types/product.types";

export function filterProducts(
  products: Product[],
  search: string
) {


  if (!search.trim()) {
    return products;
  }

  return products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );
}