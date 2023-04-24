import { randomUUID } from 'crypto';
import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  const nonce = randomUUID();

  return (
    <Html lang="ko">
      <Head>
        {process.env.NODE_ENV === 'production' && (
          <meta
            content={`default-src 'self'; script-src 'self' 'nonce-${nonce}'`}
            httpEquiv="Content-Security-Policy"
          />
        )}
        <link href="/circle.svg" rel="icon" />
        <link href="/circle-16.png" rel="icon" sizes="16x16" />
        <link href="/circle-32.png" rel="icon" sizes="32x32" />
        <link href="/circle-48.png" rel="icon" sizes="48x48" />
        <link href="/circle-64.png" rel="icon" sizes="64x64" />
        <link href="/circle-96.png" rel="icon" sizes="96x96" />
        <link href="/circle-120.png" rel="icon" sizes="120x120" />
        <link href="/circle-128.png" rel="icon" sizes="128x128" />
        <link href="/circle-192.png" rel="icon" sizes="192x192" />
        <link href="/circle-256.png" rel="icon" sizes="256x256" />
        <link href="/circle-512.png" rel="icon" sizes="512x512" />
        <link href="/circle-180.png" rel="apple-touch-icon" sizes="180x180" />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              '(()=>{let e="dark",t="theme",c=t=>{t?document.documentElement.classList.add(e):document.documentElement.classList.remove(e)};window.__setPreferredTheme=a=>{c(a===e);try{localStorage.setItem(t,a)}catch(e){}};let a=matchMedia("(prefers-color-scheme: dark)"),m=a=>{let m;try{m=localStorage.getItem(t)}catch(e){}c(m===e||null==m&&a)};m(a.matches),a.addEventListener("change",e=>{m(e.matches)})})();',
          }}
          nonce={nonce}
        />
      </Head>
      <body>
        <Main />
        <NextScript nonce={nonce} />
      </body>
    </Html>
  );
};

export default Document;
