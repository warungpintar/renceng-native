import React from 'react';
import {
  View as RNView,
  ViewProps as RNViewProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

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
  RNViewProps &
  TouchableOpacityProps & {
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
  const Base = typeof props.onPress === 'function' ? TouchableOpacity : RNView;

  const BaseView = styled(Base)<ViewProps>`
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
