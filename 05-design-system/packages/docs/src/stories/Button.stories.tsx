import type { StoryObj, Meta } from '@storybook/react-vite'
import { Button, type ButtonProps } from "@ignite-ui/react";

export default {
  title: 'Button',
  component: Button,

  // padrão para todos
  args: {
    children: 'Enviar'
  }
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  // args: {
  //   children: 'Enviar'
  // }
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    size: 'small'
  }
};
