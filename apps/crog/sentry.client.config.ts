import * as Sentry from '@sentry/nextjs';

Sentry.init({
  debug: false,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',
  integrations: [new Sentry.Replay({ blockAllMedia: true, maskAllText: true })],
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  tracesSampleRate: 1,
});
