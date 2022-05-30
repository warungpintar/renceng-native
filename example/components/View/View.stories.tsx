import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {View} from '@warungpintar/renceng-native';
import {
  ShowcaseSection,
  ShowcaseItem,
  Showcase,
} from '../../components/Showcase';

export default {
  title: 'components/View',
  component: View,
} as ComponentMeta<typeof View>;

export const Basic: ComponentStory<typeof View> = args => (
  <Showcase>
    <ShowcaseSection title="View" subtitle="Basic">
      <ShowcaseItem title={'large'}>
        <View {...args} width={300} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View {...args} />
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View {...args} width={100} />
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View {...args} width={50} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Rounded: ComponentStory<typeof View> = args => (
  <Showcase>
    <ShowcaseSection title="View" subtitle="Rounded">
      <ShowcaseItem title={'large'}>
        <View {...args} width={300} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View {...args} />
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View {...args} width={100} />
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View {...args} width={50} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Shadow: ComponentStory<typeof View> = args => (
  <Showcase>
    <ShowcaseSection title="View" subtitle="Shadow (react-native only)">
      <ShowcaseItem title={'large'}>
        <View {...args} width={300} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View {...args} />
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View {...args} width={100} />
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View {...args} width={50} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Color: ComponentStory<typeof View> = args => (
  <Showcase>
    <ShowcaseSection title="View" subtitle="Color">
      <ShowcaseItem title={'large'}>
        <View {...args} width={300} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <View {...args} />
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <View {...args} width={100} />
      </ShowcaseItem>
      <ShowcaseItem title={'extra small'}>
        <View {...args} width={50} />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

Basic.args = {
  width: 200,
  height: 100,
  bg: 'white',
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
};

Rounded.args = {
  width: 200,
  height: 100,
  bg: 'white',
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
  borderRadius: 8,
};

Shadow.args = {
  width: 200,
  height: 100,
  bg: 'white',
  borderWidth: 0.5,
  borderColor: 'black',
  borderStyle: 'solid',
  shadowColor: 'black',
  shadowOffset: {
    width: 4,
    height: 8,
  },
  shadowOpacity: 0.5,
  shadowRadius: 8,
  elevation: 8,
};

Color.args = {
  width: 200,
  height: 100,
  bg: '#FECF28',
  borderWidth: 1,
  borderColor: 'black',
  borderStyle: 'solid',
};
