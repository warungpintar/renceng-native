import React from 'react';
import {Button,Text,Icon,View} from '@warungpintar/renceng-native';
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

export const Type: ComponentStory<typeof Button> = args => (
  <Showcase>
    <ShowcaseSection title="Button" subtitle="Type">
      <ShowcaseItem title="Primary">
        <Button variant="primary"><Text>Primary</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Primary (Blue)">
        <Button variant="blue"><Text>Primary (Blue)</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Success">
        <Button variant="success"><Text>Success</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Danger">
        <Button variant="danger"><Text>Danger</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Secondary">
        <Button variant="outline"><Text>Secondary</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Secondary (Blue)">
        <Button variant="outline-blue"><Text>Secondary (Blue)</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Link">
        <Button variant="link"><Text>Link</Text></Button>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const CustomColor: ComponentStory<typeof Button> = args => (
  <Showcase>
    <ShowcaseSection title="Button" subtitle="Custom Color">
      <ShowcaseItem title="#304D63">
        <Button variant="custom" bg="#304D63"><Text>#304D63</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="#B2E7E8">
        <Button variant="custom" bg="#B2E7E8"><Text>#B2E7E8</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="#8FB9AA">
        <Button variant="custom" bg="#8FB9AA"><Text>#8FB9AA</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="#F2D096">
        <Button variant="custom" bg="#F2D096"><Text>#F2D096</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="#ED8975">
        <Button variant="custom" bg="#ED8975"><Text>#ED8975</Text></Button>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const State: ComponentStory<typeof Button> = args => (
  <Showcase>
    <ShowcaseSection title="Button" subtitle="State">
      <ShowcaseItem title="Regular">
        <Button><Text>Regular</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Loading">
        <Button isLoading><Text>Loading</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Disabled">
        <Button disabled><Text>Disabled</Text></Button>
      </ShowcaseItem>
      <ShowcaseItem title="Loading & Disabled">
        <Button disabled isLoading><Text>Loading & Disabled</Text></Button>
      </ShowcaseItem>
    </ShowcaseSection>
  </Showcase>
);

export const WithIcon: ComponentStory<typeof Button> = args => (
  <Showcase>
    <ShowcaseSection title="Button" subtitle="Icon">
      <ShowcaseItem title="Icon Left">
        <Button>
          <View flexDirection="row" alignItems="center">
            <Icon name="car" size={16}/>
            <Text ml={1}>Icon Left</Text>
          </View>
        </Button>
      </ShowcaseItem>
      <ShowcaseItem title="Icon Right">
        <Button>
          <View flexDirection="row" alignItems="center">
            <Text mr={1}>Icon Right</Text>
            <Icon name="car" size={16}/>
          </View>
        </Button>
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

Type.args = {
  size: 'md',
};

CustomColor.args = {
  size: 'md',
};

State.args = {
  size: 'md',
};

WithIcon.args = {
  size: 'md',
};
