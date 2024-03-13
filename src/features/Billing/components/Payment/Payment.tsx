import { useContext, useState } from 'react';
import {
  CardBody, 
  CardFooter, 
  Grid,
  GridItem,
} from '@chakra-ui/react';
import { Input } from '@/components/Input/Input';
import { BillingPanelScreenProps } from '../../types/BillingPanelScreenProps';
import { IoMdCard, IoMdCash } from 'react-icons/io';
import { Button } from '@/components/Button/Button';
import { currencyFormat } from '@/utils/currencyFormat';
import { PaymentStrings as strings } from '../../strings/es/Payment.strings';
import { BillContext } from '../../providers/BillContext';
import { Bill, TPaymentMethod } from '../../types/TBill';

export type paymentProps = BillingPanelScreenProps & {
  onSubmit: () => void;
}

export const Payment = ({ onSubmit }: paymentProps) => {
  const { bill, setBill } = useContext(BillContext);
  const amount = bill.total;
  const [cashAmount, setCashAmount] = useState(amount);
  const spare = cashAmount - amount;
  const inputSize = "sm";

  const setId = (id: string) => {
    setBill(new Bill(bill.setId(id)));
  };

  const setName = (name: string) => {
    setBill(new Bill(bill.setName(name)));
  };

  const setPhone = (phone: string) => {
    setBill(new Bill(bill.setPhone(phone)));
  };

  const setAddress = (address: string) => {
    setBill(new Bill(bill.setAddress(address)));
  };

  const setPaymentMethod = (paymentMethod: TPaymentMethod) => {
    setBill(new Bill(bill.setPaymentMethod(paymentMethod)));
  };

  return (
    <>
      <CardBody>
        <Grid templateColumns='repeat(1, 1fr)' gap={2} >
          <GridItem>
            <Input 
              size={inputSize} label={strings.RTNInputLabel} 
              defaultValue={bill.id}
              onChangeValue={(value) => setId(value)} 
              placeholder={strings.RTNInputPlaceholder} />
          </GridItem>
          <GridItem>
            <Input 
              size={inputSize} label={strings.NameInputLabel} 
              defaultValue={bill.name}
              onChangeValue={(value) => setName(value)} 
              placeholder={strings.NameInputPlaceholder} />
          </GridItem>
          <GridItem>
            <Input 
              size={inputSize} label={strings.PhoneInputLabel} 
              type="tel" 
              defaultValue={bill.phone} 
              onChangeValue={(value) => setPhone(value)}
              placeholder={strings.PhoneInputPlaceholder} />
          </GridItem>
          <GridItem>
            <Input 
              size={inputSize} label={strings.AddressInputLabel} 
              defaultValue={bill.address} 
              onChangeValue={(value) => setAddress(value)}
              placeholder={strings.AddressInputPlaceholder} />
          </GridItem>
          <GridItem>
            <Input
              size={inputSize} label={strings.ClientPaymentInputLabel} 
              type='number' 
              defaultValue={parseFloat(amount.toFixed(2))} 
              placeholder={`${currencyFormat(amount)}`} 
              onChangeValue={(value) => setCashAmount(value || 0)}
              />
          </GridItem>
          <GridItem>
            <Input size={inputSize} label={strings.SpareInputLabel} placeholder={currencyFormat(spare)} disabled />
          </GridItem>
        </Grid>
      </CardBody>
      <CardFooter gap={2}>
        <Button icon={ <IoMdCard/> } onClick={() => {
          setPaymentMethod('card');
          onSubmit();
          }} >
          { strings.CardPayButtonValue }
        </Button>
        <Button icon={ <IoMdCash/> } onClick={() => {
          setPaymentMethod('cash');
          onSubmit();
          }} >
          { strings.CashPayButtonValue }
        </Button>
      </CardFooter>
    </>
  )
}