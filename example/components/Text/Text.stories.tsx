import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {
  ShowcaseSection,
  ShowcaseItem,
  Showcase,
} from '../../components/Showcase';

import {View, Text, colors} from 'renceng-native';

export default {
  title: 'components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

export const Basic: ComponentStory<typeof Text> = args => (
  <Showcase>
    <ShowcaseSection title="Text" subtitle="Basic">
      <ShowcaseItem title={'11px'}>
        <View width={200}>
          <Text {...args}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'12px'}>
        <View width={200}>
          <Text {...args} fontSize={12}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'14px'}>
        <View width={200}>
          <Text {...args} fontSize={14}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'16px'}>
        <View width={200}>
          <Text {...args} fontSize={16}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'18px'}>
        <View width={200}>
          <Text {...args} fontSize={18}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'20px'}>
        <View width={200}>
          <Text {...args} fontSize={20}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'22px'}>
        <View width={200}>
          <Text {...args} fontSize={22}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'24px'}>
        <View width={200}>
          <Text {...args} fontSize={24}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'28px'}>
        <View width={200}>
          <Text {...args} fontSize={28}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'32px'}>
        <View width={200}>
          <Text {...args} fontSize={32}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Category: ComponentStory<typeof Text> = args => (
  <Showcase>
    <ShowcaseSection title="Text" subtitle="Category">
      <ShowcaseItem title={'xs'}>
        <View width={200}>
          <Text {...args}>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'sm'}>
        <View width={200}>
          <Text {...args} category='sm'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'md'}>
        <View width={200}>
          <Text {...args} category='md'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'lg'}>
        <View width={200}>
          <Text {...args} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'xl'}>
        <View width={200}>
          <Text {...args} category='xl'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'2xl'}>
        <View width={200}>
          <Text {...args} category='2xl'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'3xl'}>
        <View width={200}>
          <Text {...args} category='3xl'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'4xl'}>
        <View width={200}>
          <Text {...args} category='4xl'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'5xl'}>
        <View width={200}>
          <Text {...args} category='5xl'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'6xl'}>
        <View width={200}>
          <Text {...args} category='6xl'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Align: ComponentStory<typeof Text> = args => (
  <Showcase>
    <ShowcaseSection title="Text" subtitle="Align">
      <ShowcaseItem title={'Align left'}>
        <View width={200} bg={colors.primary}>
          <Text {...args} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Align right'}>
        <View width={200} bg={colors.primary}>
          <Text {...args} category='lg' textAlign='right'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Center'}>
        <View width={200} bg={colors.primary}>
          <Text {...args} category='lg' textAlign='center'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Color: ComponentStory<typeof Text> = args => (
  <Showcase>
    <ShowcaseSection title="Text" subtitle="Color">
      <ShowcaseItem title={'Primary'}>
        <View width={200}>
          <Text {...args} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Gray.100'}>
        <View width={200}>
          <Text {...args} color={colors.gray[100]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Gray.500'}>
        <View width={200}>
          <Text {...args} color={colors.gray[500]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Yellow.100'}>
        <View width={200}>
          <Text {...args} color={colors.yellow[100]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Yellow.500'}>
        <View width={200}>
          <Text {...args} color={colors.yellow[500]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Blue.100'}>
        <View width={200}>
          <Text {...args} color={colors.blue[100]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Blue.500'}>
        <View width={200}>
          <Text {...args} color={colors.blue[500]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Green.100'}>
        <View width={200}>
          <Text {...args} color={colors.green[100]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Green.500'}>
        <View width={200}>
          <Text {...args} color={colors.green[500]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Red.100'}>
        <View width={200}>
          <Text {...args} color={colors.red[100]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Red.500'}>
        <View width={200}>
          <Text {...args} color={colors.red[500]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Orang.100'}>
        <View width={200}>
          <Text {...args} color={colors.orange[100]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Orange.500'}>
        <View width={200}>
          <Text {...args} color={colors.orange[500]} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const Weight: ComponentStory<typeof Text> = args => (
  <Showcase>
    <ShowcaseSection title="Text" subtitle="Weight">
      <ShowcaseItem title={'Regular'}>
        <View width={200}>
          <Text {...args} category='lg'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Semi-Bold'}>
        <View width={200}>
          <Text {...args} category='lg' fontWeight='600'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
      <ShowcaseItem title={'Bold'}>
        <View width={200}>
          <Text {...args} category='lg' fontWeight='800'>Forage shoreditch flannel seitan skateboard</Text>
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

Basic.args = {
  fontSize: 11
};

Category.args = {
  category: 'xs'
};

Align.args = {
  textAlign: 'left'
}

Color.args = {
  color: colors.primary
}

Weight.args = {
  fontWeight: '400',
}