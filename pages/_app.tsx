import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layout';
import type { AppProps } from 'next/app';
import DefaultTheme from "../themes/default";
import Head from "next/head";

import '../styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>hayper</title>
      </Head>
      <ChakraProvider theme={DefaultTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}