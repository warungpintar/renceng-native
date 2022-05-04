/* TODO: implement color constants & themes using ThemeProvider */
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
    /* FIXME: this throws error on android storybook */
    variant: {
      control: {
        type: 'select',
        options: [
          'primary',
          'blue',
          'success',
          'danger',
          'outline',
          'outline-blue',
          'link',
          'outline-disabled',
          'link-disabled',
          'disabled',
        ],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg', 'xl'],
      },
    },
  },
} as ComponentMeta<typeof Button>;

/* TODO: Separates showcase for icons buttons */
export const Default: ComponentStory<typeof Button> = args => (
  <Showcase>
    <ShowcaseSection title="Button" subtitle="Basic">
      <ShowcaseItem title="Default">
        <Button {...args} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

Default.args = {
  variant: 'primary',
  size: 'md',
  title: 'Button',
  disabled: false,
};
