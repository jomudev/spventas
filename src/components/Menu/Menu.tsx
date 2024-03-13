import { JSX, JSXElementConstructor, Ref, useRef } from 'react';
import { Menu as ChakraMenu, MenuButton, MenuList, MenuItem, FormLabel, Button } from '@chakra-ui/react';
import { ReactElement, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export type MenuItemsType = {
  icon?: ReactElement;
  text: string;
  command?: string;
};

const variants = {
  outline: {
    variant: 'outline',
  },
  solid: {
    variant: 'solid',
  },
}

export type MenuProps = {
  items: MenuItemsType[];
  onChange: (index: number) => void;
  initialButtonIcon?: ReactElement;
  variant?: keyof typeof variants;
  ariaLabel: string;
};

export const Menu = ({ items, initialButtonIcon, onChange, ariaLabel, variant = "solid" }: MenuProps) => {
  const [val, setValue] = useState(items[0].text);
  let icon = useRef(initialButtonIcon);
  const setIcon = (newIcon: ReactElement) => {
    icon.current = newIcon
  };
  return (
    <ChakraMenu>
        <MenuButton
          {...variants[variant]}
          aria-label={ariaLabel}
          leftIcon={icon.current}
          rightIcon={<BiChevronDown />}
          as={Button}
        > 
        { val }
        </MenuButton>
      <MenuList>
        {
          items.map((item, index) => (
            <MenuItem 
              key={Math.random().toString(12).substring(0)}
              onClick={() => {
                setValue(item.text);
                setIcon(item.icon);
                onChange(index);
              }}
              icon={item.icon} 
              command={item.command}
            >
              { item.text }
            </MenuItem>
          ))
        }
      </MenuList>
    </ChakraMenu>
  )
};