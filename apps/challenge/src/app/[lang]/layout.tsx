import '@/styles/tailwind.css';

import type { Metadata } from 'next';
import Script from 'next/script';
import type { FC, ReactNode } from 'react';

import { notoSansKR } from '@/fonts';
import type { Locale } from '@/types';

import Providers from '../Providers';

export const metadata: Metadata = {
  description: 'Challenge',
  robots: { follow: true, index: true },
  title: 'Challenge',
};

interface RootLayoutProps {
  children?: ReactNode;
  params: { lang: Locale };
}

const RootLayout: FC<RootLayoutProps> = ({ children, params: { lang } }) => {
  return (
    <html className={notoSansKR.variable} lang={lang}>
      <body>
        <Providers>{children}</Providers>
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
