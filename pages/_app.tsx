import axiosClient from '@/api-client/axiosClient';
import { Layout } from '@/components/common/layouts';
import { SWRConfig } from 'swr';
import '../styles/globals.scss';
import '../styles/Home.module.scss';
import Head from 'next/head';
import Script from 'next/script';
import * as gtag from '@/lib/gtag';
function MyApp({ Component, pageProps }: any) {
  const LayoutDefault = Component.Layout || Layout;
  return (
    <SWRConfig
      value={{
        fetcher: (url) => axiosClient.get(url),
      }}
    >
      <LayoutDefault>
        <Head>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <Component {...pageProps} />
      </LayoutDefault>
    </SWRConfig>
  );
}

export default MyApp;
