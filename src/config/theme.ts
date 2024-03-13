import { extendTheme } from '@chakra-ui/react';
export const colors = {
  primary: '#1a365d',
  primaryAccent: '#ffffff',
  danger: '#ff3344',
};
const styles = {
  global: {
    'html, body': {
      height: '100%',
      bg: 'gray.50',
    },
    '#__next': {
      height: '100%',
      bg: 'gray.50',
    },
  },
};
export const theme = extendTheme({ colors, styles });