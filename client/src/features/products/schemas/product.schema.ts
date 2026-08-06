import { z } from "zod";

export const productSchema = z.object({
  name: z
    .string()
    .min(2, "Product name must be at least 2 characters"),

  price: z
    .number()
    .min(0, "Price cannot be negative"),

  stock: z
    .number()
    .int()
    .min(0, "Stock cannot be negative"),

  status: z.enum(["active", "inactive"]),
});

export type ProductFormValues = z.infer<
  typeof productSchema
>;