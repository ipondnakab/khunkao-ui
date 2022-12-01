import React from 'react';
import { Meta, Story } from '@storybook/react';
import Heading, {
  HeadingPropsType,
  H1 as Head1,
  H2 as Head2,
  H3 as Head3,
  H4 as Head4,
  H5 as Head5,
  H6 as Head6,
} from '.';

const meta: Meta = {
  title: 'Text/Heading',
  component: Heading,
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

export default meta;

const TemplateHeading: Story<HeadingPropsType> = ({
  children,
  level,
  ...args
}) => (
  <>
    <Heading {...args} level={level}>
      {children} : Heading
    </Heading>
    <Head1 {...args}>{children} : H1</Head1>
    <Head2 {...args}>{children} : H2</Head2>
    <Head3 {...args}>{children} : H3</Head3>
    <Head4 {...args}>{children} : H4</Head4>
    <Head5 {...args}>{children} : H5</Head5>
    <Head6 {...args}>{children} : H6</Head6>
  </>
);

export const Default = TemplateHeading.bind({});
Default.args = { children: 'Text Heading' };
