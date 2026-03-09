import * as Avatar from '@radix-ui/react-avatar';
import { styled } from "../../styles";

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  width: '$16', // 64px
  height: '$16',
  overflow: 'hidden',

  // variants: {
  //   sm: {

  //   },
  //   md: {

  //   }
  // }
});

export const AvatarImage = styled(Avatar.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover', // imagem não distorcer
  borderRadius: 'inherit'
});

export const AvatarFallback = styled(Avatar.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '$gray600',
  color: '$gray800',

  svg: {
    width: '$6',
    height: '$6',
  }
});