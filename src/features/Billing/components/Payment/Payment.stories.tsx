import { Meta, Story } from '@storybook/nextjs';
import { Payment, paymentProps } from './Payment';
import { ExampleBill } from '../../res/dataExamples';
import { Card } from '@chakra-ui/react';

const meta: Meta = {
  title: 'Billing/Payment',
  component: Payment,
};

const Template: Story<paymentProps> = (props) => (
  <Card>
    <Payment {...props} />
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  bill: ExampleBill,
};

export default meta;