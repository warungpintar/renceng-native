import React from 'react';
import {
  Icon as EvaIcon,
  IconProps as EvaIconProps,
} from 'react-native-eva-icons';

export type IconProps = EvaIconProps & {
  size?: number;
  color?: string;
};

const Icon = ({ size = 24, color = 'black', ...props }: IconProps) => {
  const usedProps = {
    width: size,
    height: size,
    fill: color,
    ...props,
  };

  return <EvaIcon {...usedProps} />;
};

export default Icon;
