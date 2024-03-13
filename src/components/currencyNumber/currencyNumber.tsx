import { Text, TextProps } from "@chakra-ui/react";
import { currencyFormat } from "@/utils/currencyFormat";

export type CurrencyNumberProps = TextProps & {
  value: number;
}

export const CurrencyNumber = ({ value, ...props } : CurrencyNumberProps) => {
  return (
      <Text { ...props } >{ currencyFormat(value) }</Text>
  );
}