import '@/styles/tailwind.css';

import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

import { PokemonAPI } from '@/api';
import { notoSansKR } from '@/fonts';
import type { Locale } from '@/types';
import { preloadDictionaries } from '@/utils';

import Providers from '../Providers';

export const metadata: Metadata = {
  description: 'Challenge',
  robots: { follow: true, index: true },
  title: 'Challenge',
};

export const generateStaticParams = () => {
  return [{ lang: 'ko' }, { lang: 'en' }];
};

interface RootLayoutProps {
  children?: ReactNode;
  params: { lang: Locale };
}

const RootLayout: FC<RootLayoutProps> = ({ children, params: { lang } }) => {
  preloadDictionaries();
  PokemonAPI.preloadPokemon();

  return (
    <html className={notoSansKR.variable} lang={lang}>
      <head>
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `(()=>{let e="dark",t="theme",c=t=>{t?document.documentElement.classList.add(e):document.documentElement.classList.remove(e)};window.__setPreferredTheme=a=>{c(a===e);try{localStorage.setItem(t,a)}catch(e){}};let a=matchMedia("(prefers-color-scheme: dark)"),m=a=>{let m;try{m=localStorage.getItem(t)}catch(e){}c(m===e||null==m&&a)};m(a.matches),a.addEventListener("change",e=>{m(e.matches)})})();`,
          }}
        />
      </head>
      <body className="min-w-[320px] text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
        <div className="mx-auto max-w-screen-sm">
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
