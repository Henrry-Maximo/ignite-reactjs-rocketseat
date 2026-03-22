import type { AppProps } from 'next/app';
import { globalStyles } from '../styles/global';
import { Toaster } from 'sonner';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster richColors />
    </>
  )
}
