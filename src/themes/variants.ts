export const Variants = {
  TextCategory: {
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
  },
  TextWeight: {
    prop: 'weight',
    variants: {
      regular: {
        fontFamily: 'OpenSans-Regular',
      },
      semibold: {
        fontFamily: 'OpenSans-SemiBold',
      },
      bold: {
        fontFamily: 'OpenSans-Bold',
      },
      light: {
        fontFamily: 'OpenSans-Light',
      },
      italic: {
        fontFamily: 'OpenSans-Italic',
      },
      regular2: {
        fontFamily: 'Montserrat-Regular',
      },
      semibold2: {
        fontFamily: 'Montserrat-SemiBold',
      },
      bold2: {
        fontFamily: 'Montserrat-Bold',
      },
      light2: {
        fontFamily: 'Montserrat-Light',
      },
      italic2: {
        fontFamily: 'Montserrat-Italic',
      },
    },
  },
  ButtonVariants: {
    variants: {
      custom: {
        color: '#000000',
        bg: '#FFFFFF',
        borderRadius: 4,
      },
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
      xs: {
        py: 1,
        px: 2,
      },
      sm: {
        py: 2,
        px: 3,
      },
      md: {
        py: 2,
        px: 3,
      },
      lg: {
        py: 12,
        px: 24,
      },
      xl: {
        py: 3,
        px: 4,
      },
    },
  },
};
