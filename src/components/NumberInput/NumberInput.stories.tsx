import { Meta, StoryObj } from '@storybook/nextjs';
import { NumberInput, NumberInputProps } from '@/components/NumberInput/NumberInput';

const meta: Meta = {
  title: "Components/NumberInput",
  component: NumberInput,
};

export default meta;
type Story = StoryObj<typeof NumberInput>;

export const Default: Story = {
  args: {
    onChange: (value) => alert(value),
    defaultValue: 0
  },
};
