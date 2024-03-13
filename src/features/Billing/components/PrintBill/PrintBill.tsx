import { Box, Td, Text, Tr } from "@chakra-ui/react";
import { Bill } from "../../types/TBill";
import { Ref, forwardRef } from "react";
import { BusinessData } from "@/res/businessData";
import { Table } from "@/components/Table/Table";
import { Product } from "../../types/TProduct";
import { keyGenerator } from "@/utils/keyGenerator";
import { CurrencyNumber } from "@/components/currencyNumber/currencyNumber";
import { localeDate } from "@/utils/localeDate";
import { numbersToWords } from "@/utils/numbersToWords";
import PrintBillStrings from './Strings';

export type PrintBillProps = {
  bill: Bill,
};

export const printBillItems = (products: Product[]) => {
  return products.map((product) => (
    <Tr key={keyGenerator()}>
      <Td width="20px" textAlign="center">
        { product.quantity }
      </Td>
      <Td textOverflow={'ellipsis'} overflow="hidden" maxW={100}>
        { product.name }/{ product.description }
      </Td>
      <Td textAlign="center" >
        <CurrencyNumber value={ product.totalPrice } />
      </Td>
      <Td textAlign="center" >
        <CurrencyNumber value={ product.total } />
      </Td>
    </Tr>
  ));
};

export const PrintBill = forwardRef(function PrintBill ({ bill }: PrintBillProps, ref: Ref<any>) {
  const printHeaders = ['Uds', 'Descripción', 'PxU', 'Importe'];
  return (
    <Box ref={ref} padding={3} width={390}>
      <h1>Factura</h1>
      <h2>{ BusinessData.name }</h2>
      <h3>{ PrintBillStrings.dateString }: { localeDate(bill.date, 'short', 'medium') }</h3>
      <h3>{ PrintBillStrings.customerString }: { bill.name }</h3>
      <Table size="sm" headers={printHeaders} items={printBillItems(bill.products)} />
      <Text 
        as='h2' 
        display={'inline-flex'} 
        width={'100%'} 
        paddingX={4} 
        paddingY={2} 
        justifyContent={'space-between'}> 
        <Text>{ PrintBillStrings.totalToPayString }: </Text>
        <CurrencyNumber value={bill.total} />
      </Text>
      <Text></Text>
      <Text>SON { numbersToWords(bill.total) } </Text>
      <Text>**** Orden N˚ { bill.code } ****</Text>
    </Box>
  );
});