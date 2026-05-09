// oxlint-disable import/namespace
// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
import * as Sentry from '@sentry/nextjs';

if (!process.env.NEXT_PUBLIC_SENTRY_DISABLED) {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

    integrations: [
      Sentry.replayIntegration({
        // Fintech: mask all user input and text to prevent PII capture in session replays
        maskAllText: true,
        maskAllInputs: true,
        blockAllMedia: true,
      }),
      Sentry.consoleLoggingIntegration(),
      Sentry.browserTracingIntegration(),

      ...(process.env.NODE_ENV === 'development' ? [Sentry.spotlightBrowserIntegration()] : []),
    ],

    // Fintech: do not capture request headers or user IPs
    sendDefaultPii: false,

    // Sample 10% of traces in all environments — increase only with explicit review
    tracesSampleRate: 0.1,

    // 10% of sessions sampled; 100% when an error occurs
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 0.1,

    // Enable logs to be sent to Sentry
    enableLogs: true,

    debug: false,
  });
}

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
