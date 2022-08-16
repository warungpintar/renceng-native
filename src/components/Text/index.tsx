import React from 'react';
import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  color as colorSystem,
  ColorProps,
  flex,
  FlexProps,
  compose,
  variant as systemVariant,
} from 'styled-system';
import styled from '@emotion/native';
import { Variants } from '../../themes';
import { colors } from '../../constants';
const { TextWeight, TextCategory } = Variants;

export type TextProps = TypographyProps &
  RNTextProps &
  SpaceProps &
  ColorProps &
  FlexProps & {
    children?: React.ReactNode;
    category?: string;
    color?: string;
    weight?: string;
  };

const Text = (props: TextProps) => {
  const BaseText = styled(RNText)<TextProps>(
    compose(
      typography,
      space,
      colorSystem,
      flex,
      systemVariant(TextCategory),
      systemVariant(TextWeight),
    ),
  );

  return <BaseText {...props} />;
};

Text.defaultProps = {
  color: colors.black,
  weight: 'regular',
};

export default Text;
