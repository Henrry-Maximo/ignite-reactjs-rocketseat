import type { StoryObj, Meta } from '@storybook/react-vite'
import { Text, type TextProps } from "@ignite-ui-repo/react";

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quas fugiat sunt aliquid est accusantium veniam, eum minima mollitia iste cum optio aliquam explicabo alias nisi quam, quisquam sequi aperiam!',
   },
   argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'inline-radio'
      },
    },
   },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = { };

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  },
};
