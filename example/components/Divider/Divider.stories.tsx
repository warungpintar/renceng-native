import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Divider,View} from 'renceng-native';
import {
  ShowcaseSection,
  ShowcaseItem,
  Showcase,
} from '../../components/Showcase';

export default {
  title: 'components/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

export const Basic: ComponentStory<typeof Divider> = args => (
  <Showcase>
    <ShowcaseSection title="Divider" subtitle="Basic">
      <ShowcaseItem title={'large'}>
        <View width={300}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View width={200}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View width={100}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View width={50}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Width: ComponentStory<typeof Divider> = args => (
  <Showcase>
    <ShowcaseSection title="Divider" subtitle="Basic">
      <ShowcaseItem title={'large'}>
        <View width={300}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View width={200}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View width={100}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View width={50}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Solid: ComponentStory<typeof Divider> = args => (
  <Showcase>
    <ShowcaseSection title="Divider" subtitle="Basic">
      <ShowcaseItem title={'large'}>
        <View width={300}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View width={200}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View width={100}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View width={50}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Dashed: ComponentStory<typeof Divider> = args => (
  <Showcase>
    <ShowcaseSection title="Divider" subtitle="Basic">
      <ShowcaseItem title={'large'}>
        <View width={300}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View width={200}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View width={100}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View width={50}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Color: ComponentStory<typeof Divider> = args => (
  <Showcase>
    <ShowcaseSection title="Divider" subtitle="Basic">
      <ShowcaseItem title={'large'}>
        <View width={300}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View width={200}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View width={100}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View width={50}>
          <Divider {...args} />
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
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
