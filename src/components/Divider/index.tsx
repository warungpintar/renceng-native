import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';

import {
  space,
  SpaceProps,
  border,
  BorderProps,
  BorderStyleProps,
} from 'styled-system';
import styled from '@emotion/native';

export type DividerProps = SpaceProps &
  BorderProps &
  RNViewProps & {
    size?: number;
    color?: string;
    type?: BorderStyleProps['borderStyle'];
  };

const Divider = ({
  size = 1,
  color = 'black',
  type = 'solid',
  ...props
}: DividerProps) => {
  const BaseView = styled(RNView)<DividerProps>`
    ${space}
    ${border}
  `;
  const usedProps = {
    borderBottomWidth: size,
    borderBottomColor: color,
    borderStyle: type,
    ...props,
  };
  return <BaseView {...usedProps} />;
};

Divider.defaultProps = {
  size: 1,
  color: 'black',
  type: 'solid'
};

export default Divider;
