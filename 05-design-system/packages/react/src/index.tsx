import { ComponentProps } from 'react';
import { styled } from './styles';

// export type ButtonProps = {
//   size: 'small' | 'big';
// }

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  // padding: '$2 $4',
  // height: '$10',
  border: 0,
  fontWeight: 'bold',
  color: '#white',

  '&:hover': {
    backgroundColor: '$ignite700',
    color: '$white',
    cursor: 'pointer'
  },

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4'
      },
      big: {
        fontSize: 16,
        padding: '$3 $6'
      }
    },
  },

  defaultVariants: {
    size: 'small',
  }
});

export type ButtonProps = ComponentProps<typeof Button>;

// export function App() {
//   return (
//     <Button>Hello World!</Button>
//   )
// }
