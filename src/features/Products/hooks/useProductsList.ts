//hooks
import { useEffect, useState } from 'react';
//types
import { Product } from '@/features/Billing/types/TProduct';
import ProductsGridString from '../components/ProductsGrid/Strings';

export const findProduct = (products: Product[] | undefined, search: string): Product[] => {
  return products?.filter((product) => {
    const includedInKey = (key: keyof Product) => product[key].toLocaleString().toLocaleLowerCase().includes(search.toLocaleLowerCase());
    return Object.keys(product).some(includedInKey);
  }) || [];
}

export const useProductsList = (initialProducts: Product[] = []) => {
  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [foundProducts, setFoundProducts] = useState<Product[]>([]);

  useEffect(() => {
    setFoundProducts(findProduct(products, search));
  }, [search, products]);

  const getProductsFromCategory = (category: string) => {
    if (category === ProductsGridString.initialTabCategoryAll) return products;
    return products.filter((product) => product.category === category);
  }

  return {
    search,
    products: products,
    foundProducts: foundProducts,
    setProducts,
    setSearch,
    getProductsFromCategory,
  };
}