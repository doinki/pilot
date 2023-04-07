import '@/styles/tailwind.css';

import type { ExtendedAppProps } from '@pilot/types';
import { noop } from '@pilot/utils';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';

const App = ({ Component, pageProps, router }: ExtendedAppProps) => {
  const getLayout = Component.getLayout || noop;

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isSafari =
      userAgent.includes('safari') && !userAgent.includes('chrom');

    if (isSafari) {
      window.history.scrollRestoration = 'auto';
    }
  }, []);

  return (
    <>
      <DefaultSeo defaultTitle="Lotto" titleTemplate="%s - Lotto" />
      {getLayout(<Component {...pageProps} />, { pageProps, router })}
    </>
  );
};

export default App;
