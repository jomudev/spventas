import { Meta, Story } from '@storybook/nextjs';
import { Input, InputProps } from './Input';

const meta: Meta = {
  title: 'Components/Input',
  component: Input,
};

const Template: Story<InputProps> = (props) => (
  <Input {...props} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Text me",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "Etiqueta del Input",
  placeholder: "Input con etiqueta" , 
}

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  defaultValue: 'Input con mensaje de error',
  type: 'email',
  errorMessage: "Mensaje de error",
};

export default meta;