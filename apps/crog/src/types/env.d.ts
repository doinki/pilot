declare namespace NodeJS {
  interface ProcessEnv extends Dict<string> {
    API_URL: string;
    NEXT_PUBLIC_SENTRY_DSN: string;
    TARGET: 'desktop' | 'mobile';
  }
}
