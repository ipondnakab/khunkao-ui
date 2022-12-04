import React from 'react';
import { Meta, Story } from '@storybook/react';
import Card, { CardFooter, CardPropsType } from '.';
import { ThemeEnum, ThemeModeEnum } from '../../../global/enums/theme-mode';
import BackgroundStory from '../../Util/BackgroundStory';
import Button from '../../General/Button';
import Image from '../../General/Image';

const meta: Meta = {
  title: 'Layout/Card',
  component: Card,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

const Template: Story<CardPropsType> = args => (
  <BackgroundStory>
    <Card {...args} />
  </BackgroundStory>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'Card...',
  themeMode: ThemeModeEnum.dark,
  theme: ThemeEnum.blur,
  onClose: undefined,
};

export const HeaderAndFooter = Template.bind({});
HeaderAndFooter.args = {
  children: (
    <div>
      <Image src="https://picsum.photos/600/280" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s,
      </p>
    </div>
  ),
  cardHeader: 'Title Header',
  cardFooter: (
    <CardFooter
      style={{ justifyContent: 'space-between', alignItems: 'center' }}
    >
      <span>Title Footer</span>
      <Button theme="blur" componentType="info">
        Got One...
      </Button>
    </CardFooter>
  ),
  themeMode: ThemeModeEnum.dark,
  theme: ThemeEnum.blur,
  onClose: () => alert('Close card !!'),
};
export default meta;
