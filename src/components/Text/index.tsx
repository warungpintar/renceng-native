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
  compose,
} from 'styled-system';
import styled from '@emotion/native';
import { Variants } from '../../themes';

export type TextProps = TypographyProps &
  SpaceProps &
  ColorProps &
  FlexProps & {
    children?: React.ReactNode;
    category?: string;
    color?: string;
  };

const Text = ({ color = 'black', ...props }: TextProps) => {
  const BaseText = styled(RNText)<TextProps>(
    compose(typography, space, colorSystem, flex, Variants.TextCategory)
  );

  const usedProps = {
    color,
    ...props,
  };

  return <BaseText {...usedProps} />;
};

export default Text;
