import axiosClient from '@/api-client/axiosClient';
import { Layout } from '@/components/common/layouts';
import { SWRConfig } from 'swr';
import '../styles/globals.scss';
import '../styles/Home.module.scss';

function MyApp({ Component, pageProps }: any) {
  const LayoutDefault = Component.Layout || Layout;
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
      }}
    >
      <LayoutDefault>
        <Component {...pageProps} />
      </LayoutDefault>
    </SWRConfig>
  );
}

export default MyApp;
