import React from 'react';
import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>hayakiブログ</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
