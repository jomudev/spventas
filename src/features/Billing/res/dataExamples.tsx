import { Bill } from "@/features/Billing/types/TBill";
import { Product } from "@/features/Billing/types/TProduct";



export const ExampleProducts: Product[] = [
  new Product({
    name: 'leche',
    imageURL: "https://img.freepik.com/foto-gratis/leche-paja_23-2147691033.jpg?w=1060&t=st=1708143455~exp=1708144055~hmac=297add076db7a8d7b9ea5972ff6945ede3a4ca1d29fec63f9174ce80b58c31d3",
    price: 26,
    description: "Bebida lactea",
    category: "Lacteos",
    quantity: 1,
    discount: 2,  
  }),
  new Product({  
    name: 'queso',
    imageURL: "",
    category: "Lacteos",
    description: "Alimento Lacteo",
    price: 46,
    quantity: 2,
    discount: 3
  }),
  new Product({
    name: 'arroz',
    price: 32,
    category: "Granos",
    description: "Grano basico",
    imageURL: "https://img.freepik.com/vector-gratis/composicion-realista-arroz-monticulo-arroz-blanco-crudo-cerca-gachas-cocidas-tazon-decorado-ilustraciones-vectores-brotes-verdes_1284-77442.jpg?w=2000&t=st=1708234280~exp=1708234880~hmac=b719b6c278d23d515d014a77f45c1ba08df50c586ada3a2a8f8fc6c51c49ae6c",
    quantity: 1,
    discount: 0,
  })
];

export const ExampleBill: Bill = new Bill({
  code: 1,
  id: '0101200002459', 
  date: new Date(),
  name: "Joann Murillo", 
  address: "col. 15 de septiembre", 
  phone: '31899705', 
  products: ExampleProducts,
  cashAmount: 0,
  spare: 0,
  paymentMethod: 'cash',
});
