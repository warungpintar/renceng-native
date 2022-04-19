import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';

import {
  space,
  SpaceProps,
  color,
  ColorProps,
  layout,
  LayoutProps,
  grid,
  GridProps,
  flexbox,
  FlexboxProps,
  border,
  BorderProps,
  position,
  PositionProps,
  shadow,
  ShadowProps,
} from 'styled-system';
import styled from '@emotion/native';

export type ViewProps = SpaceProps &
  ColorProps &
  LayoutProps &
  GridProps &
  FlexboxProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  RNViewProps & {
    shadowColor?: string;
    shadowOffset?: {
      width: number;
      height: number;
    };
    shadowOpacity?: number;
    shadowRadius?: number;
    elevation?: number;
  };

const View = (props: ViewProps) => {
  const BaseView = styled(RNView)<ViewProps>`
    ${space}
    ${color}
    ${layout}
    ${grid}
    ${flexbox}
    ${border}
    ${position}
    ${shadow}
  `;
  return <BaseView {...props} />;
};

export default View;
