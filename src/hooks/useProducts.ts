// File: src/hooks/useProducts.ts
"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/app/api";
import { useEffect } from "react";

export const useProducts = () => {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  // Seed products to localStorage
  useEffect(() => {
    if (query.data) {
      localStorage.setItem("products", JSON.stringify(query.data));
    }
  }, [query.data]);

  return query;
};
