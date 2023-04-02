import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang="ko">
      <Head>
        <link href="/circle.svg" rel="icon" />
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html:
              'try{let e=localStorage.getItem("theme");"dark"===e||null===e&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.body.classList.add("dark"):document.body.classList.remove("dark")}catch(e){}',
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
