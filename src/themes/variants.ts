import { variant } from 'styled-system';

export const Variants = {
  TextCategory: variant({
    prop: 'category',
    variants: {
      xs: { fontSize: 11 },
      sm: { fontSize: 12 },
      md: { fontSize: 14 },
      lg: { fontSize: 16 },
      xl: { fontSize: 18 },
      '2xl': { fontSize: 20 },
      '3xl': { fontSize: 22 },
      '4xl': { fontSize: 24 },
      '5xl': { fontSize: 28 },
      '6xl': { fontSize: 32 },
    },
  }),
};
