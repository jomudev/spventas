'use client'
// types | utils
import { ReactElement, useState } from 'react';
import { useContext } from 'react';
import { BillContext } from '@/features/Billing/providers/BillContext';
// UI
import { Button } from '@/components/Button/Button';
import { BillingPanel } from '../..'
import { Box } from '@chakra-ui/react';

export const Footer = ({ children } : { children: ReactElement }) => {
  return (
    <footer style={{
      position: 'fixed',
      width: '100%',
      bottom: 0,
      height: 50,
      
      alignItems: 'center',
      overflow: 'visible',
      display: 'flex',
      background: 'rgba(255,255,255,.6)',
      backdropFilter: 'blur(12px)',
    }}>
      {children}
    </footer>
  )
};

export const FooterBill = () => {
  const { bill } = useContext(BillContext);
  const [opened, setOpened] = useState<Boolean>(bill.products.length > 0);
  if (bill.products.length === 0) {
    return (

    <Footer>
      <Button disabled variant={"outline"} position="absolute" right={0} onClick={() => setOpened(!opened)} marginRight={8} > 
        Ver Factura
      </Button>
    </Footer>
    )
  }
  if (opened) {
    return (
      <Footer>
        <>
          <Box height={'fit-content'} position="absolute" right={8} bottom={50}>
            <BillingPanel />
          </Box>
          <Button variant={"outline"} position="absolute" right={0} onClick={() => setOpened(!opened)} marginRight={8} > 
            Ocultar Factura
          </Button>
        </>
      </Footer>
    );
  }
  return (
    <Footer>
      <Button variant={"outline"} position="absolute" right={0} onClick={() => setOpened(!opened)} marginRight={8} > 
        Ver Factura {bill.products.length > 0 ? `(${bill.products.length})` : ""}
      </Button>
    </Footer>
  );
}