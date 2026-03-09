import { ComponentProps, ElementType } from "react";
import { styled } from "../styles";

export const Box = styled('div', {
  padding: '$6', // 32px
  borderRadius: '$md',
  backgroundColor: '$gray800',
  color: '#fff',
  border: '1px solid $gray600',
});

export interface BoxProps extends ComponentProps<typeof Box> { }

Box.displayName = 'Box1';