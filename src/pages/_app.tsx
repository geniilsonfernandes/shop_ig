import "../styles/globals.ts";
import type { AppProps } from "next/app";
import { globalStyles } from "../styles/globals";
import Image from "next/image";
import { Container, Header } from "../styles/pages/app";
import logoImg from "../assets/logo.svg";
globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
