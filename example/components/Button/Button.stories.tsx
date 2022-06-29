import React from 'react';
import {Button,Text,Icon} from '@warungpintar/renceng-native';
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

export const Size: ComponentStory<typeof Button> = args => (
  <Showcase>
    <ShowcaseSection title="Button" subtitle="Size">
      <ShowcaseItem title="xs">
        <Button size="xs"><Text fontSize={11}>Tiny</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="sm">
        <Button size="sm"><Text fontSize={12}>Small</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="md">
        <Button size="md"><Text fontSize={14}>Medium</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="lg">
        <Button size="lg"><Text fontSize={16}>Large</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="xl">
        <Button size="xl"><Text fontSize={18}>Giant</Text></Button>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

Size.args = {
  variant: 'primary',
  size: 'md',
  disabled: false,
  isLoading: false,
};
