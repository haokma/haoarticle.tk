import axiosClient from '@/api-client/axiosClient';
import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { articleApi } from '../api-client';
import '../styles/globals.scss';
import '../styles/Home.module.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
