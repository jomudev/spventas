import { Table } from "@/components/Table/Table";
import { Tr, Td, Text } from '@chakra-ui/react';
import { Product } from "../../../Billing/types/TProduct";
import { ReactElement, forwardRef } from "react";
import { CurrencyNumber } from "@/components/currencyNumber/currencyNumber";

type RenderProductsTableProps = {
  products: Product[];
  actions?: (product: Product) => ReactElement[];
}

export const RenderProducts = ({ products=[], actions } : RenderProductsTableProps ) => products.map((product) => (
  <Tr key={Math.random().toString(12).substring(0)}>
    <Td>
      { product.name }
    </Td>
    <Td isNumeric >
      <Text textAlign="center" >{ product.quantity }</Text>
    </Td>
    <Td isNumeric >
      <CurrencyNumber textAlign="center" value={product.price} />
    </Td>
    <Td isNumeric>
      <CurrencyNumber textAlign="center" value={product.discount} />
    </Td>
    <Td isNumeric >
      <CurrencyNumber textAlign="center" value={product.tax} />
    </Td>
    <Td isNumeric >
      <CurrencyNumber textAlign="center" value={product.total} />
    </Td>
    {
      actions ? <Td textAlign="center" gap={2} > { actions(product) } </Td> : null
    }
  </Tr>
));

export type ProductsTableProps = {
  products: Product[];
  actions?: (product: Product) => ReactElement[];
}

export const ProductsTable = ({ products=[], actions, ...props }: ProductsTableProps) => {
  let headers = ['Descripción', 'Cantidad', 'Precio x Unidad', 'Descuento', 'Impuesto', 'Subtotal'];
  if (actions) {
    headers.push('Acciones');
  }
  return (
    <Table
      {...props}
      size="sm"
      variant="simple"
      headers={headers}
      items={RenderProducts({products, actions})}
       />
  )
};