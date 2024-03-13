'use client'
import { useContext } from 'react';
//Types 
import { Input } from '@/components/Input/Input';

// Utils
import { ProductsGridStrings as strings } from '../../strings/es/ProductsGrid.strings';
//UI
import { Box, Grid, Text } from '@chakra-ui/react';
import { BillContext } from '@/features/Billing/providers/BillContext';
import { GridProducts } from '../GridProducts/GridProducts';
import { useProductsList } from '../../hooks/useProductsList';
import { Product } from '@/features/Billing/types/TProduct';
import { ExampleProducts } from '@/features/Billing/res/dataExamples';
import { TabsNavigator } from '@/components/TabsNavigator/TabsNavigator';
import { keyGenerator } from '@/utils/keyGenerator';
import ProductsGridString from './Strings';

export type ProductsGridProps = {
  initialProducts: Product[];
}

export const getOnceFromProperty = (property: keyof typeof arr[0], arr: any[]): string[] => {
  let dicc: { [key: string]: true } = {};
  arr.forEach(item => dicc[item[property]] = true);
  return Object.keys(dicc);
}

export const ProductsGrid = () => {
  const { addToBill, isProductInBill, setProductQuantity } = useContext(BillContext);
  const { search, setSearch, products, foundProducts, getProductsFromCategory } = useProductsList(ExampleProducts);
  let categories = [ProductsGridString.initialTabCategoryAll, ...getOnceFromProperty('category', products)];
  return (
    <Box width="100%">
      <Box>
        <Input type="search" placeholder={strings.searchBoxPlaceholder} onChangeValue={(value) => setSearch(value.toLocaleString())} />
      </Box>
      <TabsNavigator
        tabList={ categories.map((category) => <Text key={keyGenerator()}>{category}</Text>) }
        tabPanels={ categories.map((category) => (
          <GridProducts 
            key={keyGenerator()}
            onProductQuantityChange={setProductQuantity} 
            products={ search.trim() !== "" ? foundProducts : getProductsFromCategory(category) } 
            onProductClick={addToBill}
            isSelected={isProductInBill}
            /> 
        ))}
      />
    </Box>
  );
};