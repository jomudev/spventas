import { tax } from "@/features/Configuration/providers/billPercentages";

export type TWithDiscount = {
  discount: number;
};

export type TWithTax = {
  tax: number;
}

export type TWithTaxAndDiscount = TWithDiscount & TWithTax;

export type TOnSale = {
  name: string;
  price: number;
  quantity: number;
};

export type TOnSaleWithDiscount = TOnSale & TWithDiscount;
export type TOnSaleWithTax = TOnSale & TWithTax;
export type TOnSaleWithTaxAndDiscount = TOnSaleWithTax & TOnSaleWithDiscount;
export type TProduct = TOnSaleWithDiscount & TOnSale & {
  imageURL: string;
  description: string;
  category: string;
};

export class Product {
    id = crypto.randomUUID();
    name = "";
    imageURL= "";
    description = "";
    category = "";
    price = 0;
    discount = 0;
    quantity = 1;

    get tax () {
      return this.price * tax;
    }
    
    get totalTax() {
      return this.tax * this.quantity;
    }
    
    get totalDiscount() {
      return this.discount * this.quantity;
    }
    
    get totalPrice() {
      return this.price * this.quantity;
    }
    
    get subtotal() {
      return this.price - this.discount + this.tax;
    }

    get total () {
      return this.subtotal * this.quantity;
    }

    constructor(initialData: TProduct) {
      this.name = initialData.name;
      this.imageURL = initialData.imageURL ?? this.imageURL;
      this.price = initialData.price;
      this.category = initialData.category;
      this.discount = initialData.discount ?? this.discount;
      this.quantity = initialData.quantity ?? this.quantity;
      this.description = initialData.description ?? this.description;
    }
};