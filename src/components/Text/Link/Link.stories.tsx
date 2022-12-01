import React from 'react';
import { Meta, Story } from '@storybook/react';
import Link, { LinkPropsType } from '.';

const meta: Meta = {
  title: 'Text/Link',
  component: Link,
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


const Template: Story<LinkPropsType> = args => <Link {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = { children: 'Link' };

export const Disabled = Template.bind({});
Disabled.args = { children: 'Disabled Link', disabled: true };
export default meta;
