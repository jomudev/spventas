'use client'
import { SimpleGrid } from "@chakra-ui/react";
import { ExampleBill } from "../../res/dataExamples";
import { Bill } from "../../types/TBill";
import { BillCard } from "../BillCard/BillCard";

const getBills = () => {
  return [ExampleBill, ExampleBill, ExampleBill ];
}

export const BillsGrid = () => {
  const bills = getBills();
  return (
    <SimpleGrid width="100%" spacing={2}>  
      { 
        bills.map(
          (bill: Bill) => <BillCard key={crypto.randomUUID()} bill={ bill }/>
        )
      }
    </SimpleGrid>
  );
};