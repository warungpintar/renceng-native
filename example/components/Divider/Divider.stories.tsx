import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Divider} from 'renceng-native';

export default {
  title: 'components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Basic: ComponentStory<typeof Divider> = args => (
  <Divider {...args} />
);

export const Width: ComponentStory<typeof Divider> = args => (
  <Divider {...args} />
);

export const Solid: ComponentStory<typeof Divider> = args => (
  <Divider {...args} />
);

export const Dashed: ComponentStory<typeof Divider> = args => (
  <Divider {...args} />
);

export const Color: ComponentStory<typeof Divider> = args => (
  <Divider {...args} />
);

Basic.args = {};

Solid.args = {
  size: 1,
  color: 'black',
  type: 'solid',
};

Width.args = {
  size: 4,
  color: 'black',
  type: 'solid',
};

Dashed.args = {
  size: 1,
  color: 'black',
  type: 'Dashed',
};

Color.args = {
  size: 1,
  color: '#FECF28',
  type: 'solid',
};
