import {
  getProduct,
  getProducts,
  updateProduct,
} from "../api/products.api";

import { productListAdapter } from "../adapters/product.adapter";

export const productsRepository = {
  async getProducts(
    ...args: Parameters<typeof getProducts>
  ) {
    const response = await getProducts(...args);

    return productListAdapter(response);
  },

  getProduct,
  updateProduct,
};