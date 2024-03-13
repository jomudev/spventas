import { getAllItemsFrom, getItem, setItem } from "@/utils/localStorage";
import { useEffect, useState } from "react";

export interface Customer {
  name: string;
  id: string;
  phone: string;
  address: string;
}

const localStorageBucketName = "businessCustomers"

export const useBusinessCustomers = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);

  const addCustomer = (customerData: Customer) => {
    setItem(customerData, localStorageBucketName);
    setCustomers(customers.concat(customerData));
  }

  useEffect(() => {
    const customersKeys = getAllItemsFrom(localStorageBucketName);
    const customers = customersKeys.map((customerKey) => getItem(customerKey));
    setCustomers(customers);
  }, []);

  return {
    customers,
    addCustomer,
  }
};