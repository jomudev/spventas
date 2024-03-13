import { Meta, Story } from '@storybook/nextjs';
import { BillingPanel } from './BillingPanel';
import { ExampleBill } from '../../res/dataExamples';

const meta: Meta = {
  title: 'Billing/BillingPanel',
  component: BillingPanel,
};

const Template: Story = (props) => (
  <BillingPanel {...props} />
);

export const Default = Template.bind({});
Default.args = {
  bill: ExampleBill,
};

export default meta;