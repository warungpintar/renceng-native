import React from 'react';
import styled from '@emotion/native';
import { Variants } from '../../themes';
import { rippleConfig } from '../../constants';
import ButtonIcon from '../Icon';
import View from '../View';
import {
  Text,
  TextProps,
  Pressable as Base,
  PressableProps as BaseProps,
  ActivityIndicator,
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
  icon?: string;
  iconPosition?: 'left' | 'right';
  /** Default will follows button's fontSize but also dynamically applicable */
  iconSize?: number;
  isLoading?: boolean;
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

export type ButtonTextProps = TextProps &
  TypographyProps &
  ColorProps &
  SpaceProps;
const ButtonText = styled(Text)<ButtonTextProps>`
  ${compose(typography, color, space)}
`;

const Button = ({
  variant,
  size,
  title,
  disabled,
  icon,
  iconPosition,
  iconSize,
  isLoading,
  ...props
}: ButtonProps) => {
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
    isLoading,
    ...props,
  };

  /* NOTE: Works on on_device mode, doesn't work on storybook web view */
  if (isLoading) {
    const activitySize = (() => {
      switch(size) {
        case 'lg':
        case 'xl':
          return 'large';
        case 'sm':
        case 'md':
          return 'small';
        default:
          return 'small';
      }
    })();

    /* Override to disabled props so it don't trigger actions */
    usedProps.disabled = true;
    usedProps.android_disableSound = true;

    return (
      <BaseButton {...usedProps}>
        <View flexDirection="row" alignItems="center">
          <ActivityIndicator
            size={activitySize}
            color={ButtonVariants.variants[currentVariant].color}
            accessibilityHint="loading"
          />
        </View>
      </BaseButton>
    );
  }

  return (
    <BaseButton {...usedProps}>
      <View flexDirection="row" alignItems="center">
        {icon && iconPosition === 'left' && (
          <ButtonIcon
            name={icon}
            size={iconSize ?? ButtonSizes.variants[size].fontSize}
            color={ButtonVariants.variants[currentVariant].color}
            testID="btnIconLeft"
          />
        )}
        <ButtonText
          color={ButtonVariants.variants[currentVariant].color}
          fontSize={ButtonSizes.variants[size].fontSize}
          fontWeight={props?.fontWeight ?? '600'}
          ml={icon && iconPosition === 'left' ? 2 : 0}
          mr={icon && iconPosition === 'right' ? 2 : 0}
        >
          {title}
        </ButtonText>
        {icon && iconPosition === 'right' && (
          <ButtonIcon
            name={icon}
            size={iconSize ?? ButtonSizes.variants[size].fontSize}
            color={ButtonVariants.variants[currentVariant].color}
            testID="btnIconRight"
          />
        )}
      </View>
    </BaseButton>
  );
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  title: 'Button',
  disabled: false,
  iconPosition: 'left',
  isLoading: false,
};

export default Button;
