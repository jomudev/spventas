'use client'
import { Card } from '@/components/Card/Card';
import { Bill } from '../../types/TBill';
import { Stat } from '@/components/Stat/Stat';
import { currencyFormat } from '@/utils/currencyFormat';
import { localeDate } from '@/utils/localeDate';
import { ProductsTable } from '../..';
import { VisuallyHidden, Wrap } from '@chakra-ui/react';
import { Button } from '@/components/Button/Button';
import { LuPrinter, LuTimerReset } from 'react-icons/lu';
import { RiBillLine } from 'react-icons/ri';
import { ReactInstance, useContext, useRef } from 'react';
import { BillContext } from '../../providers/BillContext';
import { useReactToPrint } from 'react-to-print';
import { PrintBill } from '../PrintBill/PrintBill';

export type BillCardProps = {
  bill: Bill;
};

export const BillCard = ({ bill }: BillCardProps) => {
  const { setBill } = useContext(BillContext);
  const billRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => billRef.current,
  });
  return (
    <>
      <VisuallyHidden>
        <PrintBill ref={billRef} bill={bill} />
      </VisuallyHidden>
      <Card
        header={<Stat 
          label="Orden"
          number={ currencyFormat(bill.total) }
          helpText={ localeDate(Date.now(), 'medium', undefined)}
          />}
          body={<ProductsTable products={bill.products} />}
          footer={
            <Wrap display={"inline-flex"} gap={2}>
            <Button icon={<LuPrinter />} onClick={handlePrint} >Reimprimir</Button>
            <Button icon={<RiBillLine />} variant="outline" onClick={() => setBill(bill)}>Volver a Facturar</Button>
            <Button icon={<LuTimerReset />} variant="outline" colorScheme='red'>Reversar</Button>
          </Wrap>
        }
        />
    </>
  );
};