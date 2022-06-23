import React from 'react';
import { Image as RNImage, ImageProps as RNImageProps } from 'react-native';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  border,
  BorderProps,
} from 'styled-system';
import styled from '@emotion/native';

export declare type ResizeMode = 'contain' | 'cover' | 'stretch' | 'center';

export type ImageProps = LayoutProps &
  SpaceProps &
  BorderProps &
  RNImageProps & {
    resizeMode?: ResizeMode;
    withProxy?: boolean;
    height: string | number;
    width: string | number;
    source: {
      uri: string;
    };
  };

const Image = (props: ImageProps) => {
  const ImageView = styled(RNImage)<ImageProps>`
    ${layout}
    ${space}
    ${border}
  `;
  const usedProps = {
    withProxy: props.withProxy,
    resizeMode: props.resizeMode,
    ...props,
  };

  return <ImageView {...usedProps} />;
};

Image.defaultProps = {
  withProxy: false,
  resizeMode: 'contain',
  height: 16,
  width: 16,
};

export default Image;
