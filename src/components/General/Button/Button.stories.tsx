import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonPropsType } from '.';
import BackgroundStory from '../../Util/BackgroundStory';

const meta: Meta = {
  title: 'General/Button',
  component: Button,
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

const Template: Story<ButtonPropsType> = args => (
  <BackgroundStory>
    <Button {...args} />
  </BackgroundStory>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = { children: 'Button' };

export const Disabled = Template.bind({});
Disabled.args = { children: 'Disabled Button', disabled: true };
export default meta;
