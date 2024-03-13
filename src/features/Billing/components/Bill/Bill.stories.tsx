import { Meta, Story } from '@storybook/nextjs';
import { Bill, billProps } from './Bill';
import { ExampleBill } from '../../res/dataExamples';
import { Card } from '@chakra-ui/react';

const meta: Meta = {
  title: 'Billing/Bill',
  component: Bill,
};

const Template: Story<billProps> = (props) => (
  <Card>
    <Bill {...props} />
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  bill: ExampleBill,
};

export default meta;