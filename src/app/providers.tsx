'use client'
import { theme } from '@/config/theme';
import BillContextProvider from '@/features/Billing/providers/BillContext';
import { DashboardContextProvider } from '@/features/Configuration/providers/DashboardContext';
import { ChakraProvider } from '@chakra-ui/react';
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <DashboardContextProvider>
        <BillContextProvider>
              { children }
        </BillContextProvider>
      </DashboardContextProvider>
    </ChakraProvider>
  );
}