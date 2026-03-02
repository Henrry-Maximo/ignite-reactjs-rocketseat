import type { StoryObj, Meta } from '@storybook/react-vite'
import { Box, Text, type BoxProps } from "@ignite-ui/react";

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Text>Testando o elemento Box</Text>
      </>
    )
   }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = { };
