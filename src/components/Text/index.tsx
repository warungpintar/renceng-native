import React from 'react';
import { Text as RNText } from 'react-native';

import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  color as colorSystem,
  ColorProps,
  flex,
  FlexProps,
  variant,
  compose
} from 'styled-system';
import styled from '@emotion/native';

// TODO: move to utils
export const Variants = {
  TextCategory: variant({
    prop: 'category',
    variants: {
      xs: {fontSize: 11},
      sm: {fontSize: 12},
      md: {fontSize: 14},
      lg: {fontSize: 16},
      xl: {fontSize: 18},
      '2xl': {fontSize: 20},
      '3xl': {fontSize: 22},
      '4xl': {fontSize: 24},
      '5xl': {fontSize: 28},
      '6xl': {fontSize: 32},
    }
  })
}

// TODO: move to constants
export const colors = {
  primary: '#FECF28',
  error: '#D83615',
  warning: '#FF9802',
  success: '#8BB31E',
  info: '#12ACCF',
  textBody: '#161616',
  gray: {
    100: '#F9F9F9',
    300: '#E6E6E6',
    500: '#B3B3B3',
    700: '#666666',
  },
  yellow: {
    100: '#FFF5D4',
    300: '#FEE27E',
    500: '#FECF28',
    700: '#E5BA24',
    900: '#CBA620',
  },
  blue: {
    100: '#D0EEF5',
    300: '#71CDE2',
    500: '#12ACCF',
    700: '#109BBA',
    900: '#0D7891',
  },
  green: {
    100: '#617D15',
    300: '#7DA11B',
    500: '#8BB31E',
    700: '#B9D178',
    900: '#E8F0D2',
  },
  red: {
    100: '#97260F',
    300: '#C23113',
    500: '#D83615',
    700: '#E88673',
    900: '#F7D7D0',
  },
  orange: {
    100: '#B36A01',
    300: '#E68902',
    500: '#FF9802',
    700: '#FFC167',
    900: '#FFEACC',
  },
  black: '#161616',
  white: '#FFFFFF',
  transparent: 'rgba(0,0,0,0)',
};

export type TextProps = TypographyProps &
  SpaceProps &
  ColorProps &
  FlexProps & {
    children?: React.ReactNode;
    category?: string;
    color?: string;
  };

const Text = ({ color='black', ...props}: TextProps) => {
  const BaseText = styled(RNText)<TextProps>(
    compose(
      typography,
      space,
      colorSystem,
      flex,
      Variants.TextCategory
    )
  )

  const usedProps = {
    color,
    ...props
  }

  return <BaseText {...usedProps} />;
};

export default Text;
