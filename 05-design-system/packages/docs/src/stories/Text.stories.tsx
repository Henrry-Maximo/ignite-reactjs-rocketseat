import type { StoryObj, Meta } from '@storybook/react-vite'
import { Text, type TextProps } from "@ignite-ui/react";

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi quas fugiat sunt aliquid est accusantium veniam, eum minima mollitia iste cum optio aliquam explicabo alias nisi quam, quisquam sequi aperiam!',
   },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = { };

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  },
};
