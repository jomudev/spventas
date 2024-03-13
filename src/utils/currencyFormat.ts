export const locale = 'es-HN';
export const currencyInfo = {
  name: 'Lempira',
  plural: 'Lempiras',
  symbol: 'L',
  fractionalUnit: {
    name: 'Centavo',
    plural: 'Centavos',
    symbol: '',
  },
}
export const currencyFormat = (value: number) => value?.toLocaleString(locale, {
  style: 'currency',
  currency: 'HNL',
});
