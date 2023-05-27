import '@/styles/tailwind.css';

import type { Metadata } from 'next';
import type { FC, ReactNode } from 'react';

import { PokemonAPI } from '@/api';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { notoSansKR } from '@/fonts';
import type { Locale } from '@/types';
import { preloadDictionaries } from '@/utils';

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
      <body className="mx-auto min-w-[320px] max-w-screen-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200">
        <div className="flex justify-end p-4">
          <ThemeSwitch />
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
