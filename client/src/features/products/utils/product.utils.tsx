import type { Product } from "../types/product.types";

export function filterProducts(
  products: Product[],
  search: string
) {
  console.log("Search:", search);
  console.log("Items:", products);

  if (!search.trim()) {
    return products;
  }

  return products.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  );
}