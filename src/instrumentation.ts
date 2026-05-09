import * as Sentry from '@sentry/nextjs';

const sentryOptions: Sentry.NodeOptions | Sentry.EdgeOptions = {
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  spotlight: process.env.NODE_ENV === 'development',

  integrations: [Sentry.consoleLoggingIntegration()],

  // Fintech: do not capture request headers or user IPs
  sendDefaultPii: false,

  // Sample 10% of traces in all environments — increase only with explicit review
  tracesSampleRate: 0.1,

  enableLogs: true,

  debug: false,
};

export function register() {
  if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
    if (process.env.NEXT_RUNTIME === 'nodejs') {
      Sentry.init(sentryOptions);
    }

    if (process.env.NEXT_RUNTIME === 'edge') {
      Sentry.init(sentryOptions);
    }
  }
}

export const onRequestError = Sentry.captureRequestError;
