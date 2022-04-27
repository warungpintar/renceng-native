import React from 'react';
import {
  Icon as EvaIcon,
  IconProps as EvaIconProps,
} from 'react-native-eva-icons';

export type IconProps = EvaIconProps & {
  size?: number;
  color?: string;
};

const Icon = (props: IconProps) => {
  const usedProps = {
    width: props.size,
    height: props.size,
    fill: props.color,
    ...props,
  };

  return <EvaIcon {...usedProps} />;
};

Icon.defaultProps = {
  size: 24,
  color: 'black',
};

export default Icon;
