import { CardHeader, CardProps as ChakraCardProps, Card as ChakraCard, CardFooter, CardBody } from '@chakra-ui/react';
import { ReactElement } from 'react';

export type CardProps = ChakraCardProps & {
  header: ReactElement;
  body: ReactElement;
  footer: ReactElement;
}

export const Card = ({ header, body, footer }: CardProps) => {
  return (
    <ChakraCard>
      <CardHeader>
        { header }
      </CardHeader>
      <CardBody>
        { body }
      </CardBody>
      <CardFooter>
        { footer }
      </CardFooter>
    </ChakraCard>
  )
}