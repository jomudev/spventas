/* eslint-disable react/jsx-key */
'use client'
//Libs
import { useContext, useState } from 'react';

//Features Components
import { Bill } from "@/features/Billing/components/Bill/Bill";
import { Payment } from '../Payment/Payment';
import { ConfirmationPanel } from '../ConfirmationPanel/ConfirmationPanel';

//UI Components
import { Card, CardHeader, IconButton } from '@chakra-ui/react'

//Hooks
import { currencyFormat } from '@/utils/currencyFormat';
import { FaChevronLeft } from 'react-icons/fa';
import { BillContext } from '../../providers/BillContext';
import { Stat } from '@/components/Stat/Stat';
import { localeDate } from '@/utils/localeDate';

const states = ['Verificación', 'Detalles de Pago', 'Confirmación'];

export function BillingPanel() {
  const { bill, resetBill, billingState, setBillingState } = useContext(BillContext);

  const handleBack = () => {
    if (billingState > 0) {
      setBillingState(billingState - 1);
    }
  }

  const handleNext = () => {
    if (billingState < states.length) {
      setBillingState(billingState + 1);
    }
  }

  const handleSetBillingState = (state: number) => {
    setBillingState(state);
  }

  const proceedPayment = () => {
    alert("Pago procesado");
    bill.reset();
    resetBill();
    setBillingState(0);
  }

  const BillingComponentsByState = [
    <Bill onSubmit={handleNext} />,
    <Payment 
      onSubmit={handleNext} />,
    <ConfirmationPanel  
      onConfirm={proceedPayment} 
      onCancel={() => handleSetBillingState(0)} />
  ];

  return (
    <Card overflowY={'scroll'} overflowX={'scroll'} maxHeight={650} width={'fit-content'} maxWidth={'100%'}>
      <CardHeader>
        { 
          billingState != 0 && <IconButton onClick={handleBack} variant={'transparent'} icon={<FaChevronLeft />} aria-label={'Billing Panel back button '} />
        }
        <Stat 
          label="Orden"
          number={ currencyFormat(bill.total) }
          helpText={ localeDate(bill.date, 'medium') }
         />
      </CardHeader>
      { BillingComponentsByState[billingState] || null }
    </Card>
  )
}