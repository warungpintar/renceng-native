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
} from 'styled-system';
import styled from '@emotion/native';
import { Variants } from '../../themes';
import { colors } from '../../constants';

export type TextProps = TypographyProps &
  RNTextProps &
  SpaceProps &
  ColorProps &
  FlexProps & {
    children?: React.ReactNode;
    category?: string;
    color?: string;
  };

const Text = (props: TextProps) => {
  const BaseText = styled(RNText)<TextProps>(
    compose(typography, space, colorSystem, flex, Variants.TextCategory)
  );

  return <BaseText {...props} />;
};

Text.defaultProps = {
  color: colors.black,
  fontFamily: 'OpenSans-Regular',
};

export default Text;
