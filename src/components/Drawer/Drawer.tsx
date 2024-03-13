import {
  Drawer as ChakraDrawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Stack,
} from '@chakra-ui/react';
import { ReactElement } from 'react';

export type DrawerProps = {
  title: string;
  isOpen: boolean;
  placement: 'right' | 'left' | 'bottom' | 'top',
  onClose: () => void;
  content: ReactElement;
  footer?: ReactElement;
};

export const Drawer = ({ 
  title, 
  footer, 
  content, 
  isOpen, 
  placement, 
  onClose } : DrawerProps) => {
  return (
    <>
      <ChakraDrawer 
        isOpen={isOpen}
        placement={placement}
        onClose={onClose}
        >
        <DrawerOverlay/>
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader borderBottomWidth='1px' >{ title }</DrawerHeader>

          <DrawerBody>
            <Stack spacing='24px'>
              { content }
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            { footer }
          </DrawerFooter>
        </DrawerContent>
      </ChakraDrawer>
    </>
  );
};