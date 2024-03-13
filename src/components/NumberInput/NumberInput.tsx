import {
  NumberInputProps as ChakraNumberInputProps,
  NumberInput as ChakraInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export type NumberInputProps = ChakraNumberInputProps & {

};

export const NumberInput = (props : NumberInputProps) => {
  return (
    <ChakraInput {...props} >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper/>
        <NumberDecrementStepper/>
      </NumberInputStepper>
    </ChakraInput>
  );
}