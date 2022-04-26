import React from 'react';
import { Text as RNText } from 'react-native';

import {
  typography,
  TypographyProps,
  space,
  SpaceProps,
  color,
  ColorProps,
  flex,
  FlexProps,
} from 'styled-system';
import styled from '@emotion/native';

// TODO: variant/theming

export type TextProps = TypographyProps &
  SpaceProps &
  ColorProps &
  FlexProps & {
    children?: React.ReactNode;
  };

const Text = (props: TextProps) => {
  const BaseText = styled(RNText)<TextProps>`
    ${typography}
    ${space}
    ${color}
    ${flex}
  `;
  return <BaseText {...props} />;
};

export default Text;
