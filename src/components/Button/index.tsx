import React from 'react';
import styled from '@emotion/native';
import { Variants } from '../../themes';
import { rippleConfig } from '../../constants';
import {
  Text,
  TextProps,
  Pressable as Base,
  PressableProps as BaseProps,
} from 'react-native';
import {
  compose,
  color,
  ColorProps,
  space,
  SpaceProps,
  border,
  BorderProps,
  typography,
  TypographyProps,
  variant as systemVariant,
} from 'styled-system';
const { ButtonVariants, ButtonSizes } = Variants;

export type ButtonProps = {
  variant:
    | 'primary'
    | 'blue'
    | 'success'
    | 'danger'
    | 'outline'
    | 'outline-blue'
    | 'link'
    | 'outline-disabled'
    | 'disabled'
    | 'link-disabled';
  size: 'sm' | 'md' | 'lg' | 'xl';
  title: string;
  disabled?: boolean;
} & BaseProps &
  SpaceProps &
  BorderProps &
  TypographyProps;

const BaseButton = styled(Base)<Omit<ButtonProps, 'title'>>`
  ${compose(
    space,
    border,
    typography,
    systemVariant(ButtonVariants),
    systemVariant(ButtonSizes)
  )}
`;

type ButtonTextProps = TextProps & TypographyProps & ColorProps;
const ButtonText = styled(Text)<ButtonTextProps>`
  ${compose(typography, color)}
`;

const Button = ({ variant, size, title, disabled, ...props }: ButtonProps) => {
  const currentVariant = (() => {
    if (disabled) {
      switch (variant) {
        case 'outline':
        case 'outline-blue':
          return 'outline-disabled';
        case 'link':
          return 'link-disabled';
        default:
          return 'disabled';
      }
    }

    return variant;
  })();

  const usedProps = {
    variant: currentVariant,
    size,
    android_ripple: rippleConfig[currentVariant],
    android_disableSound: disabled,
    disabled,
    ...props,
  };

  return (
    <BaseButton {...usedProps}>
      <ButtonText
        color={ButtonVariants.variants[currentVariant].color}
        fontSize={ButtonSizes.variants[size].fontSize}
        fontWeight={props?.fontWeight ?? '600'}
      >
        {title}
      </ButtonText>
    </BaseButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  title: 'Button',
  disabled: false,
};

export default Button;
