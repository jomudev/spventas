import { Meta, Story } from '@storybook/nextjs';
import { ConfirmationPanel, ConfirmationPanelProps } from './ConfirmationPanel';
import { ExampleBill } from '../../res/dataExamples';
import { Card } from '@chakra-ui/react';

const meta: Meta = {
  title: 'Billing/ConfirmationPanel',
  component: ConfirmationPanel,
};

const Template: Story = (props) => (
  <Card>
    <ConfirmationPanel {...props} />
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  bill: ExampleBill,
};

export default meta;