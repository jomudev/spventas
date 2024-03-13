import { tax } from "@/features/Configuration/providers/billPercentages";
import { Product, TProduct, TWithTax } from "./TProduct";
import { createProduct } from "@/features/Products/utils/ProductCreator";
import { createCopy } from "@/utils/createCopy";

export type TPaymentMethod = "cash" | "card";

export type TBill = {
  code: number;
  id: string;
  date: Date;
  name: string;
  address: string;
  phone: string;
  products: Product[];
  paymentMethod: TPaymentMethod;
  cashAmount: number;
  spare: number;
};

export type TBillWithTax = TBill & TWithTax;

export const summation = (prevVal: number, currentVal: number) => prevVal + currentVal;

export class Bill implements TBillWithTax {
  code: number;
  id: string;
  name: string;
  date: Date;
  address: string;
  phone: string;
  products: Product[];
  paymentMethod: TPaymentMethod = 'cash';
  cashAmount: number;
  spare: number;

  constructor(initialData: TBillWithTax | null) {
    if (initialData) {
      const { code, id, name, date, address, phone, products, paymentMethod, cashAmount } = initialData;
      this.code = code;
      this.id = id;
      this.name = name;
      this.date = date;
      this.address = address;
      this.phone = phone;
      this.products = products;
      this.paymentMethod = paymentMethod;
      this.cashAmount = cashAmount;
      this.spare = 0;
    } else {
      this.code = Math.floor(Math.random() * 1000 + 0);
      this.id = "";
      this.name = "";
      this.date = new Date(Date.now());
      this.address = "";
      this.phone = "";
      this.products = [];
      this.paymentMethod = "cash"
      this.cashAmount = 0;
      this.spare = 0;
    }
  }

  reset(): Bill {
    this.code = Math.floor(Math.random() * 1000 + 0);
    this.id = "";
    this.name = "";
    this.date = new Date(Date.now());
    this.address = "";
    this.phone = "";
    this.products = [];
    this.paymentMethod = "cash"
    this.cashAmount = 0;
    this.spare = 0;
    return this;
  }

  setProducts (products: Product[]): Bill {
    this.products = products;
    return this;
  }

  addProduct (product: Product): Bill {
    this.products = [...this.products, product];
    return this;
  }

  setProductQuantity(id: string, quantity: number): Bill {
    const modifiedProduct = this.products.find((product: Product) => product.id === id);
    if (modifiedProduct) {
      modifiedProduct.quantity = quantity;
      this.products = this.products.map(product => product.id === id ? modifiedProduct : product);
    };
    return this;
  }

  deleteProduct(productId: string): Bill {
    this.products = this.products.filter(product => product.id != productId);
    return this;
  }

  setId(id: string): Bill {
    this.id = id;
    return this;
  }

  setName(name: string) {
    this.name = name;
    return this;
  }

  setAddress(address: string): Bill {
    this.address = address;
    return this;
  }

  setPhone(phone: string): Bill {
    this.phone = phone;
    return this;
  }

  setPaymentMethod(paymentMethod: TPaymentMethod) {
    this.paymentMethod = paymentMethod;
    return this;
  }

  get subtotal() {
    return this.products.map( (product) => product.totalPrice ).reduce(summation, 0);
  }

  get total () {
    return this.products.map( (product) => product.total ).reduce(summation, 0);
  }

  get totalTax() {
    return this.products.map( (product) => product.totalTax ).reduce(summation, 0);
  }

  get totalDiscount() {
    return this.products.map( (product) => product.discount * product.quantity).reduce(summation, 0);
  }

}