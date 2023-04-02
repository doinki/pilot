import '@/styles/tailwind.css';

import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <DefaultSeo defaultTitle="Lotto" titleTemplate="%s - Lotto" />
      <Component {...pageProps} />
    </>
  );
};

export default App;
