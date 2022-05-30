import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {
  ShowcaseSection,
  ShowcaseItem,
  Showcase,
} from '../../components/Showcase';

import {Icon} from '@warungpintar/renceng-native';

export default {
  title: 'components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

export const Basic: ComponentStory<typeof Icon> = args => (
  <Showcase>
    <ShowcaseSection title="Icon" subtitle="Basic">
      <ShowcaseItem title={'small'}>
        <Icon {...args} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <Icon {...args} size={32} />
      </ShowcaseItem>
      <ShowcaseItem title={'large'}>
        <Icon {...args} size={64} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Outline: ComponentStory<typeof Icon> = args => (
  <Showcase>
    <ShowcaseSection title="Icon" subtitle="Outline">
      <ShowcaseItem title={'small'}>
        <Icon {...args} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <Icon {...args} size={32} />
      </ShowcaseItem>
      <ShowcaseItem title={'large'}>
        <Icon {...args} size={64} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Color: ComponentStory<typeof Icon> = args => (
  <Showcase>
    <ShowcaseSection title="Icon" subtitle="Color">
      <ShowcaseItem title={'small'}>
        <Icon {...args} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <Icon {...args} size={32} />
      </ShowcaseItem>
      <ShowcaseItem title={'large'}>
        <Icon {...args} size={64} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

Basic.args = {
  name: 'car',
  size: 16,
};

Outline.args = {
  name: 'car-outline',
  size: 16,
};

Color.args = {
  name: 'car',
  size: 16,
  color: '#FECF28',
};
