import { Product } from "@/features/Billing/types/TProduct";
import { SimpleGrid } from "@chakra-ui/react";
import { ProductCard } from "../ProductCard/ProductCard";

export type GridProductsProps = {
  products: Product[];
  onProductClick: (product: Product) => void;
  isSelected: (productId: string) => boolean;
  onProductQuantityChange: (productId: string, quantity: number) => void;
};

export const GridProducts = ({ products, onProductClick, onProductQuantityChange, isSelected } : GridProductsProps) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 4, lg: 6}} spacing={2} marginTop={2}>
      { 
        products.map((product) => (
          <ProductCard
            key={crypto.randomUUID()}
            product={product}
            onClick={onProductClick}
            isSelected={isSelected(product.id)} 
            onQuantityChange={onProductQuantityChange}
            />
        )
      )}
    </SimpleGrid>
  )
};