import React from 'react';
import styled from '@emotion/native';
import { Variants } from '../../themes';
import { rippleConfig } from '../../constants';
import View from '../View';
import Text, { TextProps } from '../Text';
import {
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
  position,
  PositionProps,
  flexbox,
  FlexboxProps,
  variant as systemVariant,
} from 'styled-system';
const { ButtonVariants, ButtonSizes } = Variants;

export type ButtonProps = {
  variant:
    | 'custom'
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
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  /** Default will follows button's fontSize but also dynamically applicable */
  isLoading?: boolean;
  textProps?: TextProps;
} & BaseProps &
  ColorProps &
  SpaceProps &
  BorderProps &
  TypographyProps &
  FlexboxProps &
  PositionProps;

const BaseButton = styled(Base)<ButtonProps>`
  ${compose(
    color,
    space,
    border,
    typography,
    position,
    flexbox,
    systemVariant(ButtonVariants),
    systemVariant(ButtonSizes)
  )}
`;

const Button = ({
  variant,
  size,
  disabled,
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
      switch (size) {
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

    const textSize = (() => {
      switch (size) {
        case 'xl':
          return 18;
        case 'lg':
          return 16;
        case 'md':
          return 14;
        case 'sm':
          return 12;
        case 'xs':
          return 11;
        default:
          return 14;
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
          <Text fontSize={textSize} ml={1}>
            Loading
          </Text>
        </View>
      </BaseButton>
    );
  }

  const child =
    typeof props.children === 'string' || typeof props.children === 'number' ? (
      <Text {...props.textProps}>{props.children}</Text>
    ) : (
      props.children
    );

  return <BaseButton {...usedProps} children={child} />;
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  isLoading: false,
  alignItems: 'center',
};

export default Button;
