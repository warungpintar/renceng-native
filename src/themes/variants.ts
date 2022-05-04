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
  ButtonVariants: {
    variants: {
      primary: {
        color: '#161616',
        bg: '#FECF28',
        borderColor: '#FECF28',
        borderWidth: 1,
        borderRadius: 4,
      },
      blue: {
        color: '#FFFFFF',
        bg: '#0088FF',
        borderColor: '#0088FF',
        borderWidth: 1,
        borderRadius: 4,
      },
      success: {
        color: '#FFFFFF',
        bg: '#00A344',
        borderColor: '#00A344',
        borderWidth: 1,
        borderRadius: 4,
      },
      danger: {
        color: '#FFFFFF',
        bg: '#DE3710',
        borderColor: '#DE3710',
        borderWidth: 1,
        borderRadius: 4,
      },
      outline: {
        color: '#161616',
        bg: 'transparent',
        borderColor: '#161616',
        borderWidth: 1,
        borderRadius: 4,
      },
      'outline-blue': {
        color: '#0088FF',
        bg: 'transparent',
        borderColor: '#0088FF',
        borderWidth: 1,
        borderRadius: 4,
      },
      link: {
        color: '#0088FF',
        bg: 'transparent',
        padding: 0,
      },
      disabled: {
        color: '#737373',
        bg: '#E8E8E8',
        borderColor: '#E8E8E8',
        borderWidth: 1,
        borderRadius: 4,
      },
      'outline-disabled': {
        color: '#737373',
        bg: 'transparent',
        borderColor: '#D0D0D0',
        borderWidth: 1,
        borderRadius: 4,
      },
      'link-disabled': {
        color: '#737373',
        bg: 'transparent',
        padding: 0,
      },
    },
  },
  ButtonSizes: {
    prop: 'size',
    variants: {
      sm: {
        py: 12,
        px: 28,
        fontSize: 12,
      },
      md: {
        py: 16,
        px: 32,
        fontSize: 14,
      },
      lg: {
        py: 20,
        px: 36,
        fontSize: 16,
      },
      xl: {
        py: 24,
        px: 40,
        fontSize: 18,
      },
    },
  },
};
