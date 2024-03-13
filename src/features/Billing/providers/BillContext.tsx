import { createContext, useState } from 'react';
import { BillHookState, defaultBill, useBill } from '../hooks/useBill';
import { Product } from '../types/TProduct';
import { createCopy } from '@/utils/createCopy';

const defaultState: BillHookState = {
  bill: defaultBill,
  setBill: () => { },
  isProductInBill: function (productId: string): boolean {
    throw new Error('Function not implemented.');
  },
  addToBill: function (product: Product): void {
    throw new Error('Function not implemented.');
  },
  deleteFromBill: function (productId: string): void {
    throw new Error('Function not implemented.');
  },
  resetBill: function (): void {
    throw new Error('Function not implemented.');
  },
  setProductQuantity: function (productId: string, quantity: number): void {
    throw new Error('Function not implemented.');
  },
};

export const BillContext = createContext(defaultState);

export default function BillContextProvider ({ children }: { children: React.ReactNode }) {
  const billState = useBill(defaultBill);
  const [billingState, setBillingState] = useState(0);
  return (
    <BillContext.Provider value={createCopy(billState, { billingState, setBillingState })}>
      { children }
    </BillContext.Provider>
  );
}