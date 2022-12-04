import React from 'react';
import { Meta, Story } from '@storybook/react';
import Image, { ImagePropsType } from '.';
import BackgroundStory from '../../Util/BackgroundStory';

const meta: Meta = {
  title: 'General/Image',
  component: Image,
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

const Template: Story<ImagePropsType> = args => (
  <BackgroundStory>
    <Image {...args} />
  </BackgroundStory>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  children: 'Disabled Image',
  src: 'https://picsum.photos/600/600',
  width: 200,
  height: 200,
};

export const DisabledPreview = Template.bind({});
DisabledPreview.args = {
  children: 'Disabled Image',
  src: 'https://picsum.photos/600/600',
  width: 200,
  height: 200,
  disabledPreview: true
};

// export const Disabled = Template.bind({});
export default meta;
