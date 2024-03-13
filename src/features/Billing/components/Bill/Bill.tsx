'use client'
import { ProductsTable } from '@/features/Billing';
import { currencyFormat } from '@/utils/currencyFormat';
import {
  CardFooter,
  CardBody,
  Box,
  Text
} from '@chakra-ui/react'
import { Button } from '../../../../components/Button/Button';
import { MdOutlinePayments } from 'react-icons/md'; 
import { Bill as BillClass } from '../../types/TBill';
import { useContext } from 'react';
import { BillContext } from '../../providers/BillContext';
import { tax } from '@/features/Configuration/providers/billPercentages';
import { Product } from '../../types/TProduct';
import { BiTrash } from 'react-icons/bi';
import { colors, theme } from '@/config/theme';

export type billProps = {
  onSubmit: () => void;
}

export const Bill = ({
  onSubmit,
}: billProps) => {
  const { bill, setBill, deleteFromBill } = useContext(BillContext);
  const resetBill = () => {
    const newBill = new BillClass(bill.reset());
    setBill(newBill);
  };

  const tableActions = (product: Product) => [
    <Button key={crypto.randomUUID()} onClick={() => deleteFromBill(product.id)} colorScheme={colors.danger} ><BiTrash/></Button>,
  ];
  return (
    <>  
      <CardBody>
        {
          bill.products.length > 0 && <ProductsTable products={ bill.products } actions={ tableActions } />
        }
        <Box display='inline-flex' justifyContent="space-between" width="100%" >
          <Text>Subtotal: </Text>
          <Text>{ currencyFormat(bill.subtotal)}</Text>
        </Box>
        <Box display='inline-flex' justifyContent="space-between" width="100%" >
          <Text>{tax * 100 }% Impuesto:</Text>
          <Text>{ currencyFormat(bill.totalTax)}</Text>
        </Box>
        <Box display='inline-flex' justifyContent="space-between" width="100%" >
          <Text>Descuento:</Text>
          <Text>{ currencyFormat(bill.totalDiscount) }</Text>
        </Box>
      </CardBody>
      <CardFooter gap={2}>
        <Button  
          disabled={bill.products.length == 0}
          onClick={() => onSubmit() } 
          icon={<MdOutlinePayments />}>
            { currencyFormat(bill.total)}
          </Button>
        <Button variant='outline' onClick={resetBill}>Deshacer Factura</Button>
      </CardFooter>
    </>
  );
}