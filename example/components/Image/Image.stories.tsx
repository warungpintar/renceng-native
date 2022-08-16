import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {
  ShowcaseSection,
  ShowcaseItem,
  Showcase,
} from '../../components/Showcase';

import {View, Image} from '@warungpintar/renceng-native';
export default {
  title: 'components/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

import WP from './assets/images/WP.png';

export const URI: ComponentStory<typeof Image> = args => (
  <Showcase>
    <ShowcaseSection title="Image" subtitle="Image with URL">
      <ShowcaseItem title="default width and height">
        <Image {...args} />
      </ShowcaseItem>
      <ShowcaseItem title={'small'}>
        <Image {...args} width={200} height={200} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <Image {...args} width={300} height={300} />
      </ShowcaseItem>
      <ShowcaseItem title={'large'}>
        <Image {...args} width={400} height={400} />
      </ShowcaseItem>

      <ShowcaseItem title={'With Percentage'}>
        <View width={400} height={400}>
          <Image {...args} width={'65%'} height={'65%'} />
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const LocalPath: ComponentStory<typeof Image> = args => (
  <Showcase>
    <ShowcaseSection title="Image" subtitle="Image with local path">
      <ShowcaseItem title={'small'}>
        <Image {...args} width={200} height={200} />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <Image {...args} width={300} height={300} />
      </ShowcaseItem>
      <ShowcaseItem title={'large'}>
        <Image {...args} width={400} height={400} />
      </ShowcaseItem>

      <ShowcaseItem title={'With Percentage'}>
        <View width={400} height={300}>
          <Image {...args} width={'85%'} height={'85%'} />
        </View>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const WithBorder: ComponentStory<typeof Image> = args => (
  <Showcase>
    <ShowcaseSection title="Image" subtitle="Image with Border">
      <ShowcaseItem title={'small'}>
        <Image
          {...args}
          width={200}
          height={200}
          borderWidth={1}
          borderColor="blue"
        />
      </ShowcaseItem>
      <ShowcaseItem title={'medium'}>
        <Image
          {...args}
          width={300}
          height={300}
          borderWidth={4}
          borderColor="blue"
        />
      </ShowcaseItem>
      <ShowcaseItem title={'radius'}>
        <Image
          {...args}
          width={400}
          height={200}
          borderWidth={4}
          borderColor="blue"
          borderRadius={60}
        />
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

URI.args = {
  source: {
    uri: 'data:image/jpeg;base64,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',
  },
};

LocalPath.args = {
  source: WP,
};

WithBorder.args = {
  source: {
    uri: 'https://storage.googleapis.com/kanjuro-wa-sticker/sticker-pack-1/108733448_947616079049479_945714156152963291_n.png',
  },
};
