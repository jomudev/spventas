import { useState, Dispatch, SetStateAction } from 'react';
import { Bill } from '../types/TBill';
import { TProduct, Product } from '../types/TProduct';

export const defaultBill: Bill = new Bill();

export type SetStateFunction = Dispatch<SetStateAction<Bill>>;

export type SetPropertyFunction = (property: string, value: string | number | TProduct[]) => void;

export type BillHookState = {
  bill: Bill,
  setBill: SetStateFunction;
  isProductInBill: (productId: string) => boolean;
  addToBill: (product: Product) => void;
  deleteFromBill: (productId: string) => void;
  resetBill: () => void;
  setProductQuantity: (productId: string, quantity: number) => void;
};

export const useBill = (initialBill: Bill): BillHookState => {
  const [bill, setBill] = useState(initialBill);

  const isProductInBill = (producId: string) => {
    const { products  } = bill;
    return !!products.find( billProduct   => producId === billProduct.id);
  };

  const addToBill = (product: Product) => {
    if (isProductInBill(product.id))
      return;
    const newBill = bill.addProduct(product);
    setBill(new Bill(newBill));
  };

  const deleteFromBill = (productId: string) => {
    const newBill = bill.deleteProduct(productId);
    setBill(new Bill(newBill));
  };

  const resetBill = () => {
    const newBill = bill.reset();
    setBill(new Bill(newBill));
  }

  const setProductQuantity = (productId: string, quantity: number) => {
    const newBill = bill.setProductQuantity(productId, quantity);
    setBill(new Bill(newBill));
  };

  return {
    bill: bill,
    setBill,
    isProductInBill,
    addToBill,
    setProductQuantity,
    deleteFromBill,
    resetBill,
  }
};