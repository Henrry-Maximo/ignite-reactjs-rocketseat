// container para as páginas da aplicação (carrega com qualquer página)

import { AppProps } from "next/app";
import { globalStyles } from "../styles/global";

import logoImg from '../assets/logo.svg';
import { Container, Header } from "../styles/pages/app";

import Image from 'next/image'

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg.src} width={150} height={150} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
