import { Product, TProduct } from "@/features/Billing/types/TProduct"

export const createProduct = (productData: TProduct) => {
  return new Product(productData);
}