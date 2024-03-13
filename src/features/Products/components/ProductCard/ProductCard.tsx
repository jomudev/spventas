import { Product, TProduct } from "@/features/Billing/types/TProduct";
import { Box, Card, CardFooter, CardHeader, Text } from "@chakra-ui/react";
import { currencyFormat } from "@/utils/currencyFormat";
import Image from 'next/image';
import { NumberInput } from "@/components/NumberInput/NumberInput";
import { BillContext } from "@/features/Billing/providers/BillContext";
import { useContext } from "react";

const noImageURL = "https://img.freepik.com/vector-gratis/gradiente-signo-foto_23-2149263898.jpg?w=1060&t=st=1708278510~exp=1708279110~hmac=e99b620550e8e89c63385b7c878312942ccb6173600a137b63bb15b78af23ed8";
    
export type ProductBoxProps = {
  product: Product,
  onClick: (product: Product) => void;
  isSelected: boolean;
  onQuantityChange: (productId: string, quantity: number) => void;
}

export const ProductCard = ({ product, onClick, isSelected, onQuantityChange }: ProductBoxProps) => {
  const { billingState } = useContext(BillContext);
  return (
    <Card as="button" height='fit-content' onClick={() => onClick(product)} >
      <CardHeader>
        <Image priority style={{ borderRadius: 8 }} width={250} height={40} src={product.imageURL ? product.imageURL : noImageURL} alt={`${product.name}`} />
      </CardHeader>
      <CardFooter flexDirection={'column'} alignItems={'flex-start'} width="100%">
          <Box display={'inline-flex'} alignItems="center" justifyContent={'space-between'} flexDirection={'row'} width={'100%'}>
            <Text>{ product.name }</Text>
            <Text >
              <Text fontSize={10} position="absolute" transform="translate(20px, -10px)" >{ currencyFormat(product.price) }</Text>
              <Text fontSize={16} >{ currencyFormat(product.subtotal) }</Text>
            </Text>
          </Box>
          <Text fontSize={11} color={'grayText'} >{ product.description }</Text>
          {
            isSelected && (
              <Box>
                <NumberInput defaultValue={product.quantity} onChange={(value) => billingState === 0 ? onQuantityChange(product.id, parseInt(value)) : null } min={1} />
              </Box> 
            )
          }
      </CardFooter>
    </Card>
)};