import { locale } from "./currencyFormat";

export type DateStyle = 'medium' | 'long' | 'short' | 'full';

export const localeDate = (date: Date | number, dateStyle: DateStyle, timeStyle: DateStyle | undefined ) => {
  const rtrnDate = new Date(date).toLocaleDateString(locale, { dateStyle });
  const rtrnTime = new Date(date).toLocaleTimeString(locale, { timeStyle });
  return rtrnDate + (!!timeStyle ? ' - ' : ' ') + rtrnTime;
}