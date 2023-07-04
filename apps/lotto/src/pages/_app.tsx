import '@/styles/tailwind.css';

import { useExperimentalScrollRestoration } from '@pilot/hooks';
import type { ExtendedAppProps } from '@pilot/types/next';
import { noop } from '@pilot/utils';
import { DefaultSeo } from 'next-seo';

const App = ({ Component, pageProps, router }: ExtendedAppProps) => {
  const getLayout = Component.getLayout || noop;

  useExperimentalScrollRestoration();

  return (
    <>
      <DefaultSeo defaultTitle="Lotto" titleTemplate="%s - Lotto" />
      {getLayout(<Component {...pageProps} />, { pageProps, router })}
    </>
  );
};

export default App;
