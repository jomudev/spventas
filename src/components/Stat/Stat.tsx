import { Stat as ChakraStat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';

export type StateProps = {
  label: string,
  number: string,
  helpText: string,
};

export const Stat = ({ label, number, helpText } : StateProps) => {
  return (
    <ChakraStat>
      <StatLabel>{ label }</StatLabel>
      <StatNumber>{ number }</StatNumber>
      <StatHelpText>{ helpText } </StatHelpText>
    </ChakraStat>
  );
}