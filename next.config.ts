import './src/libs/Env';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { withSentryConfig } from '@sentry/nextjs';
import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Disable legacy XSS auditor — rely on CSP instead (OWASP recommendation)
  { key: 'X-XSS-Protection', value: '0' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  },
];

const baseConfig: NextConfig = {
  output: 'standalone',
  // Type checking is done via `pnpm check:types` (tsc --noEmit). Skipping it
  // here avoids a false failure when wattpm's loader strips TypeScript
  // annotations from next.config.ts before Next.js's internal TS checker runs.
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: {
    position: 'bottom-right',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  reactCompiler: process.env.NODE_ENV === 'production', // Keep the development environment fast
  logging: {
    browserToTerminal: process.env.BROWSER_TO_TERMINAL_DISABLED !== 'true',
  },
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};

const withIntl = createNextIntlPlugin('./src/libs/I18n.ts');

// Compose plugins without top-level identifier reassignment (avoids a bug in
// @platformatic/next loader-next-15.cjs which crashes on AssignmentExpressions
// where the left-hand side is a plain identifier, not a MemberExpression).
const withAnalyzer = (config: NextConfig) =>
  process.env.ANALYZE === 'true' ? withBundleAnalyzer()(config) : config;

const withSentry = (config: NextConfig) =>
  process.env.NEXT_PUBLIC_SENTRY_DISABLED
    ? config
    : withSentryConfig(config, {
        org: process.env.SENTRY_ORGANIZATION,
        project: process.env.SENTRY_PROJECT,

        // Only print logs for uploading source maps in CI
        silent: !process.env.CI,

        // Upload a larger set of source maps for prettier stack traces (increases build time)
        widenClientFileUpload: true,

        // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
        tunnelRoute: '/monitoring',

        webpack: {
          reactComponentAnnotation: {
            enabled: true,
          },
          treeshake: {
            removeDebugLogging: true,
          },
        },

        telemetry: false,
      });

export default withSentry(withAnalyzer(withIntl(baseConfig)));
