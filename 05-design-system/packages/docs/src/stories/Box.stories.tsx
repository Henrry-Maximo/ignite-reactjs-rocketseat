import type { StoryObj, Meta } from '@storybook/react-vite'
import { Box, Text, type BoxProps } from "@ignite-ui-repo/react";

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando o elemento Box</Text>
  },
  argTypes: {
    children: {
      control: {
        type: null
      },
    },
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = { };
