import { Meta, Story } from "@storybook/nextjs";
import { LayoutHeader, LayoutHeaderProps } from "./LayoutHeader";

const meta: Meta = {
  title: 'Components/LayoutHeader',
  component: LayoutHeader,
};

const Template: Story<LayoutHeaderProps> = (props) => (
  <LayoutHeader {...props} />
);

export const Default = Template.bind({});
Default.args = {};

export default meta;

