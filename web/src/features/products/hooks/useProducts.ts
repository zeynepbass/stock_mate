import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";
import axios from "axios";
import { productsRepository } from "../repositories/product.repository";
import { useNavigate } from "react-router-dom";
import type { Product } from "../types/product.types";
import { useDebounce } from "@/shared/hooks/useDebounce";
import { filterProducts } from "../utils/product.utils"
export interface ProductFilters {
  page: number;
  pageSize: number;
  search?: string;
  categoryId?: number;
  brandId?: number;
}


export function useProducts() {
  const [search, setSearch] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [page, setPage] = useState(1);

  const pageSize = 10;

  const debouncedSearch = useDebounce(search, 400);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [
      "products",
      page,
      pageSize,
      debouncedSearch,
      categoryId,
      brandId,
    ],

    queryFn: () =>
      productsRepository.getProducts(
        page,
        pageSize,
        debouncedSearch,
        categoryId,
        brandId
      ),

    placeholderData: (previousData) => previousData,
  });

  const products = useMemo(() => {
    return filterProducts(data?.items ?? [], search);
  }, [data?.items, search]);

  const categories = Array.from(
    new Map(
      products.map((product) => [
        product.categoryId,
        product.categoryName,
      ])
    ).entries()
  ).map(([value, label]) => ({
    value,
    label,
  }));

  const brands = Array.from(
    new Map(
      products.map((product) => [
        product.brandId,
        product.brandName,
      ])
    ).entries()
  ).map(([value, label]) => ({
    value,
    label,
  }));

  const totalPages =
    data && data.pageSize > 0
      ? Math.ceil(data.total / data.pageSize)
      : 1;

  function handleSearch(value: string) {
    setSearch(value);

  }

  function handleCategory(value: string) {
    setCategoryId(value);
    setPage(1);
  }

  function handleBrand(value: string) {
    setBrandId(value);
    setPage(1);
  }

  return {
    data,
    products,
    categories,
    brands,

    search,
    categoryId,
    brandId,
    page,

    isLoading,
    isError,
    error,

    totalPages,

    onSearchChange: handleSearch,
    onCategoryChange: handleCategory,
    onBrandChange: handleBrand,
    onPageChange: setPage,
  };
}

export function useProductDetails(productId: number) {
  return useQuery<Product | null>({
    queryKey: ["product", "detail", productId],

    queryFn: async () => {
      const storedProduct = localStorage.getItem("product");

      if (!storedProduct) {
        return null;
      }

      const product = JSON.parse(storedProduct) as Product;

      return product;
    },

    enabled: productId > 0,
  });
}


export function useUpdateProduct(product: Product | null) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    status: 1,
  });

  useEffect(() => {
    if (!product) return;

    setForm({
      name: product.name ?? "",
      price: String(product.price ?? ""),
      stock: String(product.stock ?? ""),
      status: product.status ?? 1,

    });
  }, [product]);

  const mutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: number;
      data: {
        name: string;
        sku: string;
        barcode?: string;
        categoryId: number;
        brandId: number;
        supplierId: number;
        price: number;
        costPrice: number;
        stock: number;
        minStock: number;
        unit: number;
        status: number;
        isFeatured: boolean;
      };
    }) => productsRepository.updateProduct(id, data),

    onSuccess: () => {
      const updatedProduct = {
        ...product!,
        name: form.name.trim(),
        price: Number(form.price),
        stock: Number(form.stock),
        status: Number(form.status),
      };
    
      localStorage.setItem(
        "product",
        JSON.stringify(updatedProduct)
      );
    
      queryClient.invalidateQueries({
        queryKey: ["products"],
      });

      queryClient.invalidateQueries({
        queryKey: ["product", "detail"],
      });

      setIsEditing(false);

      toast.success("Ürün başarıyla güncellendi.");

      setTimeout(() => {
        navigate("/urunler");
      }, 3000);
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data
          "Ürün güncellenemedi.";

        toast.error(message);
        return;
      }

      toast.error("Beklenmeyen bir hata oluştu.");
    },
  });
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
  
    setForm((prev) => ({
      ...prev,
      [name]:
        name === "status"
          ? Number(value)
          : value,
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!product) return;

    mutation.mutate({
      id: product.id,
      data: {
        name: form.name.trim(),

        sku: product.sku,
        barcode: product.barcode ?? "",

        categoryId: product.categoryId,
        brandId: product.brandId,

        supplierId: 2,

        price: Number(form.price),
        costPrice: product.costPrice,

        stock: Number(form.stock),
        minStock: product.minStock,

        unit: product.unit,
        status: Number(form.status),

        isFeatured: product.isFeatured,
      },
    });
  }
console.log(form)
  return {
    form,
    isEditing,
    setIsEditing,
    handleChange,
    handleSubmit,
    isUpdating: mutation.isPending,
  };
}