import React from 'react';
import {
  layout,
  LayoutProps,
  space,
  SpaceProps,
  border,
  BorderProps,
} from 'styled-system';
import styled from '@emotion/native';
import {Image as RNImage, ImageProps as RNImageProps} from 'react-native';
import {getImageProxy} from '../../utils/ImageProxy';

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

  if (props.withProxy && props.source.uri) {
    return (
      <ImageView
        {...usedProps}
        source={{
          uri: getImageProxy(props.source.uri, {
            height: props.height,
            width: props.width,
          }),
        }}
      />
    );
  }

  return <ImageView {...usedProps} />;
};

Image.defaultProps = {
  withProxy: false,
  resizeMode: 'contain',
};

export default Image;
