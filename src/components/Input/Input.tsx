'use client'
import { useState } from 'react';
import { 
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input as ChakraInput,
  FormHelperText,
  ChakraProps
 } from '@chakra-ui/react';

export type InputProps = ChakraProps & {
 label?: string;
 size?: "sm" | "md" | "lg";
 disabled?: boolean;
 defaultValue?: string | number;
 placeholder?: string;
 type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'search';
 helpText?: string;
 errorMessage?: string;
 onChangeValue?: (value: number | string) => void;
};

export const Input = ({
  label,
  type = 'text',
  defaultValue,
  placeholder,
  helpText,
  errorMessage,
  disabled,
  onChangeValue,
  size,
  ...props
}: InputProps) => {
  const fontSizes = {
    sm: 12,
    md: 16,
    lg: 18,
  };
  return (
    <FormControl isInvalid={!!errorMessage}>
      {
        label && <FormLabel fontSize={fontSizes[size || "sm"]}>{ label }:</FormLabel>
      }
      <ChakraInput 
        {...props}
        disabled={disabled}
        placeholder={placeholder} 
        defaultValue={defaultValue}
        size={size}
        type={type} 
        onChange={(event) => onChangeValue && onChangeValue(event.target.value)} 
       />
      {
        helpText && <FormHelperText>{ helpText }</FormHelperText>
      }
      {
        errorMessage && <FormErrorMessage >{ errorMessage }</FormErrorMessage>
      }
    </FormControl>
  );
}