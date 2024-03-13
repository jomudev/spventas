/* eslint-disable react/jsx-key */
// Types
import { ReactElement, useContext, useEffect, useState } from "react";
import { ProductsTable } from "../../../Products/components/ProductsTable/ProductsTable";
// UI Components
import { CardBody, CardFooter, Grid, GridItem, Text } from "@chakra-ui/react";
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
// Utils
import { currencyFormat } from "@/utils/currencyFormat";
import { MdCheck } from "react-icons/md";
import { BillContext } from "../../providers/BillContext";
import { useBusinessCustomers } from "../../hooks/useBusinessCustomers";

export type ConfirmationPanelProps = {
  onConfirm: () => void;
  onCancel: () => void;
}

export const renderGridItems = (items: ReactElement[]) => items.map((item) => (
  <GridItem key={crypto.randomUUID()}>
    { item }
  </GridItem>
  ));

const inputFontSize = 12;

export const ConfirmationPanel = ({ onConfirm, onCancel }: ConfirmationPanelProps) => {
  const { bill } = useContext(BillContext);
  const { customers, addCustomer } = useBusinessCustomers();
  const paymentMethods = {
    cash: "Efectivo",
    card: "Tarjeta",
  }
  return (
    <>
      <CardBody gap={2}>
        <Text size="lg" fontWeight={500}>Productos:</Text>
        <ProductsTable products={bill.products} />
        <Grid templateColumns={'repeat(3, 1fr)'} gap={2}>
          { 
            renderGridItems([
              <Input size={'sm'} fontSize={inputFontSize} label="Cliente" defaultValue={bill.name} disabled />,
              <Input size={'sm'} fontSize={inputFontSize} label="RTN" defaultValue={bill.id} disabled />,
              <Input size={'sm'} fontSize={inputFontSize} label="Teléfono" defaultValue={bill.phone} disabled />,
              <Input size={'sm'} fontSize={inputFontSize} label="Método de pago" defaultValue={paymentMethods[bill.paymentMethod]} disabled />,
              <Input size={'sm'} fontSize={inputFontSize} label="Subtotal" defaultValue={currencyFormat(bill.total - bill.tax + bill.discount)} disabled/>,
              <Input size={'sm'} fontSize={inputFontSize} label="Impuesto" defaultValue={currencyFormat(bill.tax)} disabled />,
              <Input size={'sm'} fontSize={inputFontSize} label="Descuento" defaultValue={currencyFormat(bill.discount)} disabled />,
            ])
          }
        </Grid>
        <Text fontSize={24} fontWeight={500}>Total a Pagar: { currencyFormat(bill.total) }</Text>
       </CardBody>
       <CardFooter gap={2}>
          <Button onClick={onConfirm} icon={<MdCheck />}>
            Proceder Facturación
          </Button>
          <Button onClick={onCancel} variant={'outline'}>
            Cancelar Factura
          </Button>
       </CardFooter>
    </>
  )
};