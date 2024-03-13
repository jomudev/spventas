import { ReactElement, ReactNode, Ref, forwardRef } from "react";
import { Table as ChakraTable, Thead, Tbody, Th, Td, Tr, ChakraProps, TableContainer } from "@chakra-ui/react";

const variants = {
  simple: {
    variant: 'simple',
  },
  striped: {
    variant: 'striped',
    colorScheme: 'teal',
  },
  unstyled: {
    variant: 'unstyled',
  }
}

export type TableItemsProps = {
  [key: string]: string;
};

export type TableProps = ChakraProps & {
  variant?: keyof typeof variants;
  items: ReactNode;
  headers: string[];
  size?: 'sm' | 'md' | 'lg';
  headerFontSize?: number;
};

export const Table = ({ 
  variant = 'simple',
  headers,
  items,
  size = 'md',
  ...props
 }: TableProps) => {

  return (
    <TableContainer>
      <ChakraTable 
        { ...props }
        { ...variants[variant] }
        size={size}
        maxWidth={'100%'}
        >
        <Thead>
          <Tr>
            { headers.map((header) => (
                <Th textAlign="center" key={Math.random().toString(11)}>
                  { header }
                </Th>
              )
            ) 
            }
          </Tr>
        </Thead>
          <Tbody width={'auto'}>
            { items }
          </Tbody>
      </ChakraTable>
    </TableContainer>
  );
}