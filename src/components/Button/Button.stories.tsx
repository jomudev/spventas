import { PlusSquareIcon } from '@chakra-ui/icons';
import { Meta, Story } from '@storybook/nextjs'
import { Button, ButtonProps } from './Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
};

const Template: Story<ButtonProps> = (props) => (
  <Button {...props} />
);

export const Default = Template.bind({});
Default.args = {
  children: 'Click Me',
}

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: 'Click Me',
  icon: <PlusSquareIcon />
}

export default meta;