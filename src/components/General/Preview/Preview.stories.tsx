import React from 'react';
import { Meta, Story } from '@storybook/react';
import Preview, { createPreview, PreviewPropsType } from '.';
import BackgroundStory from '../../Util/BackgroundStory';
import Card, { CardFooter } from '../../Layout/Card';
import Button from '../Button';
import Image from '../Image';

const meta: Meta = {
  title: 'General/Preview',
  component: Preview,
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

const Template: Story<PreviewPropsType> = args => (
  <BackgroundStory>
    <Preview
      {...args}
      onZoomIn={() => console.log('in')}
      onZoomOut={() => console.log('out')}
    />
  </BackgroundStory>
);
const TemplateFunction: Story<PreviewPropsType> = args => (
  <BackgroundStory>
    <Button
      componentType="info"
      onClick={() =>
        createPreview({
          ...args,
          children: (
            <Card
              cardHeader="Title Header"
              cardFooter={
                <CardFooter
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span>Title Footer</span>
                  <Button theme="blur" componentType="info">
                    Got One...
                  </Button>
                </CardFooter>
              }
            >
              <div>
                <Image src="https://picsum.photos/600/280" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Card>
          ),
        })
      }
    >
      Open Preview
    </Button>
  </BackgroundStory>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
  open: true,
  style: { position: 'absolute' },
  children: Card({
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
    themeMode: 'dark',
    theme: 'normal',
  }),
};

export const PreviewWithAFunction = TemplateFunction.bind({});
// export const Disabled = Template.bind({});
export default meta;
