import React from 'react';
import {Button} from 'renceng-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {
  ShowcaseSection,
  ShowcaseItem,
  Showcase,
} from '../../components/Showcase';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: [
        'primary',
        'blue',
        'success',
        'danger',
        'outline',
        'outline-blue',
        'link',
      ],
      control: {type: 'select'},
    },
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {type: 'select'},
    },
    iconPosition: {
      options: ['left', 'right'],
      control: {
        type: 'radio',
        labels: {
          left: 'Left',
          right: 'Right',
        },
      },
    },
    iconSize: {
      control: {
        type: 'number',
        min: 0,
        max: 30,
        step: 1,
      },
    },
  },
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = args => (
  <Showcase>
    <ShowcaseSection title="Button" subtitle="Basic">
      <ShowcaseItem title="Default">
        <Button {...args} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Icon: ComponentStory<typeof Button> = args => (
  <Showcase>
    <ShowcaseSection title="Button" subtitle="with icon">
      <ShowcaseItem title="Icon">
        <Button {...args} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

Icon.args = {
  variant: 'primary',
  size: 'md',
  title: 'Button',
  disabled: false,
  icon: 'car', // TODO: Have selection for icons?
  iconPosition: 'left',
  iconSize: 16,
};

Default.args = {
  variant: 'primary',
  size: 'md',
  title: 'Button',
  disabled: false,
};
