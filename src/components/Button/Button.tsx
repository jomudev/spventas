import { Button as ChakraButton, ButtonProps as ChakraButtonProps, IconButton } from '@chakra-ui/react';
import { MouseEventHandler, ReactNode } from 'react';

const variants = {
  solid: {
    variant: 'solid',
    bg: 'primary',
    color: 'primaryAccent',
    _hover: {
      opacity: '0.8',
    },
  },
  outline: {
    variant: 'outline',
    bg: 'white',
    color: 'primary',
  },
  icon: {
    variant: 'solid',
    color: 'primary',
  }
};

export type ButtonProps = ChakraButtonProps & {
  children: ReactNode;
  type?: 'button' | 'submit' | 'reset',
  variant?: keyof typeof variants;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
  href?: string;
}

export const Button = ({
  variant = 'solid',
  as,
  type = 'button',
  children,
  colorScheme,
  icon,
  ...props
}: ButtonProps) => {
  return (
    <ChakraButton 
    {...props}
    {...variants[variant]}
    {...variant === "icon" ? {bg: colorScheme} : null}
    as={as}
    type={type}
    leftIcon={icon}
    >
      { children }
    </ChakraButton>
  )
}