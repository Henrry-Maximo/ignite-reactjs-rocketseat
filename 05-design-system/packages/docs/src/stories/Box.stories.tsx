import type { StoryObj, Meta } from '@storybook/react-vite'
import { Box, type BoxProps } from "@ignite-ui/react";

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Testando o elemento Box</span>
      </>
    )
   }
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = { };
