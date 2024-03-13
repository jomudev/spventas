import { TBill } from '@/features/Billing/types/TBill';
export type BillingPanelScreenProps = {
  onSubmit: (bill: TBill) => void;
};