import type { StoryObj, Meta } from '@storybook/react-vite'
import { Avatar, type AvatarProps } from "@ignite-ui/react";

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/henrry-maximo.png',
    alt: "show de bola de perfil"
   },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = { };

export const WithFallback: StoryObj<AvatarProps> = { 
  args: {
    src: undefined,
  }
};