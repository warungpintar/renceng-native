// stories/MyButton.stories.tsx
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Text} from 'react-native';
import {View} from 'renceng-native';

export default {
  title: 'components/View',
  component: View,
} as ComponentMeta<typeof View>;

export const Basic: ComponentStory<typeof View> = args => (
  <View {...args}>
    <Text>Hmm</Text>
  </View>
);

Basic.args = {
  borderColor: 'red',
  borderRadius: 4,
  borderWidth: 2,
  backgroundColor: 'yellow',
};
