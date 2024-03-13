import { Meta, Story } from '@storybook/nexjs';
import { Menu, MenuProps } from './Menu';
import { StarIcon } from '@chakra-ui/icons';

const meta: Meta = {
  title: 'Components/Menu',
  component: Menu,
};

const Template: Story<MenuProps> = (props) => (
  <Menu {...props} />
);

const MenuItemsExample = [
  {
  icon: null,
  text: 'Menu item 0',
  command: null,
  },
  {
    icon: <StarIcon />,
    text: 'Menu item 1 with icon',
    command: null,
  },
]

export const Default = Template.bind({});
Default.args = {
  items: MenuItemsExample,
  ariaLabel: 'Menu Component'
};

export const WithInitialButtonIcon = Template.bind({});
Default.args = {
  initialButtonIcon: <StarIcon />,
  items: MenuItemsExample,
  ariaLabel: 'Menu Component'
};

export default meta;