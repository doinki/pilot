import '@/styles/tailwind.css';

import type { Metadata } from 'next';
import Script from 'next/script';
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
      <body>
        <div className="mx-auto max-w-screen-sm">
          <Providers>{children}</Providers>
        </div>
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <Script
          id="dark-mode"
          strategy="beforeInteractive"
        >{`(()=>{let e="dark",t="theme",c=t=>{t?document.documentElement.classList.add(e):document.documentElement.classList.remove(e)};window.__setPreferredTheme=a=>{c(a===e);try{localStorage.setItem(t,a)}catch(e){}};let a=matchMedia("(prefers-color-scheme: dark)"),m=a=>{let m;try{m=localStorage.getItem(t)}catch(e){}c(m===e||null==m&&a)};m(a.matches),a.addEventListener("change",e=>{m(e.matches)})})();`}</Script>
      </body>
    </html>
  );
};

export default RootLayout;
