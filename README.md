# Next.js 16+ Boilerplate — Tailwind CSS 4 & TypeScript

<p align="center">
  <a href="https://github.com/sachidananda-panigrahi/next-js-boilerplate">
    <img
      src="public/assets/images/nextjs-starter-banner.png?raw=true"
      alt="Next js starter banner"
      style="max-width: 100%; height: auto;"
    />
  </a>
</p>

A production-ready, Fintech-hardened boilerplate for Next.js with App Router, Tailwind CSS 4, and TypeScript. Focused on developer experience, security, and observability — without the overhead of a database, authentication, or UI component library baked in.

**Repository: [sachidananda-panigrahi/next-js-boilerplate](https://github.com/sachidananda-panigrahi/next-js-boilerplate)**

---

## Features

Developer experience first. Only keep what you need — no hidden magic, no mandatory services:

- ⚡ [Next.js 16](https://nextjs.org) with App Router and Turbopack
- 🔥 [TypeScript 6](https://www.typescriptlang.org) with strict mode
- 💎 [Tailwind CSS 4](https://tailwindcss.com) utility classes
- 🤖 AI coding agent instructions for Claude Code, Codex, Cursor, OpenCode, Copilot, and more
- ✅ React 19 with React Compiler (replaces `useMemo`/`useCallback`)
- 🔐 Security hardened for Fintech — HTTP security headers, bot protection, WAF, PII-safe error monitoring
- 🛡️ [Arcjet](https://launch.arcjet.com/Q6eLbRE) — Bot detection, rate limiting, Shield WAF, attack protection
- 📝 Server-side structured logging with [LogTape](https://logtape.org) and [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=sachidananda-panigrahi)
- 🌐 Multi-language (i18n) with [next-intl](https://next-intl.dev) and [Crowdin](https://l.crowdin.com/next-js)
- ♻️ Type-safe environment variables with [T3 Env](https://env.t3.gg)
- ⌨️ Form handling with [React Hook Form](https://react-hook-form.com) + [@hookform/resolvers](https://github.com/react-hook-form/resolvers)
- 🔴 Validation with [Zod 4](https://zod.dev)
- 📏 Linting with [Oxlint](https://oxc.rs/docs/guide/usage/linter) via [Ultracite](https://ultracite.js.org)
- 💖 Formatting with [Oxfmt](https://oxc.rs/docs/guide/usage/formatter)
- 🦊 Git hooks with [Lefthook](https://github.com/evilmartians/lefthook) (replacing Husky)
- 🔍 Unused files and dependency detection with [Knip](https://knip.dev)
- 🌍 Translation validation with [i18n-check](https://github.com/lingualdev/i18n-check)
- 🦺 Unit testing with [Vitest](https://vitest.dev) browser mode
- 🧪 E2E testing with [Playwright](https://playwright.dev)
- 👷 CI pipeline with [GitHub Actions](https://github.com/features/actions) (build, lint, unit, E2E)
- 🐰 AI-powered code reviews with [CodeRabbit](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025)
- 🚨 Error monitoring with [Sentry](https://sentry.io/for/nextjs/?utm_source=github&utm_medium=paid-community&utm_campaign=general-fy25q1-nextjs&utm_content=github-banner-nextjsboilerplate-logo) (PII-safe, sampling tuned for production)
- 🔍 Local development error monitoring with [Sentry Spotlight](https://spotlightjs.com)
- ☂️ Code coverage with [Codecov](https://codecov.io)
- 🖥️ Monitoring as Code with [Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=sachidananda-panigrahi)
- 📊 Analytics with [PostHog](https://posthog.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=sachidananda-panigrahi)
- 💡 Absolute imports with `@/` prefix
- 🗂 VSCode configuration: Debug, Settings, Tasks, and Extensions
- 🤖 SEO metadata, JSON-LD, and Open Graph tags
- 🗺️ `sitemap.xml` and `robots.txt`
- 👷 Automatic dependency updates with [Dependabot](https://github.com/dependabot)
- ⚙️ Bundle analyzer

Built-in from Next.js:

- ☕ Minified HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### What was intentionally removed

This boilerplate is slimmed down from the upstream template to reduce scope and attack surface:

| Removed | Reason |
| --- | --- |
| Clerk authentication | No auth baked in — add your own (Better Auth, NextAuth, Auth.js) |
| DrizzleORM + DrizzleKit | No database layer — bring your own ORM and provider |
| PGlite (local DB) | Not needed without ORM |
| Neon (remote DB) | Not needed without ORM |
| Storybook | Removed to reduce tooling surface area |
| Semantic Release | Manual releases preferred; changelog via conventional commits |
| Commitlint | Commit format enforced by convention, not tooling |
| Commitizen | Removed with Commitlint |

### Optional features (easy to add)

- 🔑 Authentication — [Better Auth](https://www.better-auth.com), [Auth.js](https://authjs.dev), or [Clerk](https://clerk.com)
- 🗄️ Database — [DrizzleORM](https://orm.drizzle.team), [Prisma](https://www.prisma.io), or [Neon](https://neon.tech) serverless Postgres
- 🔐 Multi-tenancy, RBAC, OAuth / SSO / SAML / OIDC
- 🔗 Web3 (Base, MetaMask, Coinbase Wallet)
- 🖥️ UI component library — Shadcn UI, Radix, or any headless library

### Philosophy

- Nothing hidden — adjust any file to fit your requirements
- Dependencies updated monthly via Dependabot
- Start for free, no mandatory paid services
- Minimal code, no magic
- Unstyled template
- SEO-friendly
- Production-ready

---

## Requirements

- Node.js 22+
- pnpm 9+ (recommended) or npm

---

## Getting started

```shell
git clone --depth=1 https://github.com/sachidananda-panigrahi/next-js-boilerplate.git my-project-name
cd my-project-name
pnpm install
```

Run the project locally in development mode:

```shell
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your project. No database or external service is required to start.

---

## Project structure

```shell
.
├── README.md                       # This file
├── AGENTS.md                       # AI agent coding instructions
├── CLAUDE.md                       # References AGENTS.md
├── .github/
│   ├── actions/setup-project/      # Reusable CI setup action
│   └── workflows/
│       ├── CI.yml                  # Build, lint, unit, E2E pipeline
│       ├── checkly.yml             # Post-deploy monitoring tests
│       └── crowdin.yml             # Translation sync
├── .vscode/                        # VSCode settings and extensions
├── public/                         # Static assets
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── (auth)/             # Protected pages (dashboard)
│   │       ├── (marketing)/        # Public pages (home, about, portfolio)
│   │       └── layout.tsx          # Root layout
│   ├── components/                 # Shared React components
│   ├── libs/
│   │   ├── Arcjet.ts               # Arcjet client (Shield WAF + bot detection)
│   │   ├── Env.ts                  # Type-safe environment variables (T3 Env)
│   │   ├── I18n.ts                 # next-intl configuration
│   │   ├── I18nNavigation.ts       # Localised Link and navigation helpers
│   │   ├── I18nRouting.ts          # next-intl routing configuration
│   │   └── Logger.ts               # Server-only structured logger (LogTape)
│   ├── locales/
│   │   ├── en.json                 # English translations
│   │   └── fr.json                 # French translations
│   ├── proxy.ts                    # Next.js middleware (Arcjet + i18n routing)
│   ├── styles/
│   │   └── global.css              # Global styles
│   ├── templates/
│   │   └── BaseTemplate.tsx        # Base layout template
│   ├── types/
│   │   ├── I18n.ts                 # next-intl type augmentations
│   │   └── global.d.ts             # Global module declarations (images, etc.)
│   ├── utils/
│   │   ├── AppConfig.ts            # App-level configuration constants
│   │   └── Helpers.ts              # Shared utilities
│   ├── instrumentation.ts          # Sentry server-side instrumentation
│   └── instrumentation-client.ts   # Sentry client-side instrumentation
├── tests/
│   └── e2e/
│       ├── I18n.e2e.ts             # Language switching E2E test
│       └── Sanity.check.e2e.ts     # Checkly sanity checks
├── checkly.config.ts               # Checkly Monitoring as Code config
├── knip.config.ts                  # Knip unused code/dep detection
├── lefthook.yml                    # Git pre-commit hooks
├── next.config.ts                  # Next.js config (security headers, plugins)
├── playwright.config.ts            # Playwright E2E test config
├── tsconfig.json                   # TypeScript config
└── vitest.config.ts                # Vitest unit test config
```

---

## Environment variables

All environment variables are validated at startup via `src/libs/Env.ts`. Never read `process.env` directly — import `Env` instead.

### Server-side only

| Variable | Required | Description |
| --- | --- | --- |
| `ARCJET_KEY` | Production only | Arcjet API key (bot protection + WAF). Omit in dev to disable Arcjet. |
| `BETTER_STACK_SOURCE_TOKEN` | Optional | Better Stack log ingestion token |
| `BETTER_STACK_INGESTING_HOST` | Optional | Better Stack ingestion host URL |

### Client-side (publicly exposed)

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_APP_URL` | Optional | Full URL of the deployed app (e.g. `https://example.com`) |
| `NEXT_PUBLIC_LOGGING_LEVEL` | Optional | Log level: `error`, `warn`, `info`, `debug`, `trace`, `fatal`. Default: `info` |
| `NEXT_PUBLIC_POSTHOG_KEY` | Optional | PostHog project API key |
| `NEXT_PUBLIC_POSTHOG_HOST` | Optional | PostHog host URL |
| `NEXT_PUBLIC_SENTRY_DSN` | Optional | Sentry DSN for error reporting |

### CI / deployment

| Variable | Where | Description |
| --- | --- | --- |
| `SENTRY_AUTH_TOKEN` | Hosting provider | Sentry source map upload token |
| `SENTRY_ORGANIZATION` | CI / hosting | Sentry organisation slug |
| `SENTRY_PROJECT` | CI / hosting | Sentry project slug |
| `CODECOV_TOKEN` | GitHub Actions secret | Codecov upload token |
| `CROWDIN_PROJECT_ID` | GitHub Actions secret | Crowdin project ID |
| `CROWDIN_PERSONAL_TOKEN` | GitHub Actions secret | Crowdin personal access token |
| `CHECKLY_API_KEY` | GitHub Actions secret | Checkly API key |
| `CHECKLY_ACCOUNT_ID` | GitHub Actions secret | Checkly account ID |

> **Security note:** `BETTER_STACK_SOURCE_TOKEN` and `BETTER_STACK_INGESTING_HOST` are intentionally server-only variables. Do not prefix them with `NEXT_PUBLIC_` — doing so would expose your log ingestion credentials to the browser.

---

## Customization

Search the project for `FIXME:` to find the most common customization points. Key files:

- `public/apple-touch-icon.png`, `public/favicon.ico`, `public/favicon-*.png` — site favicon
- `src/utils/AppConfig.ts` — app name, locale list, and other constants
- `src/templates/BaseTemplate.tsx` — navigation layout and footer
- `next.config.ts` — Next.js config, security headers, plugin options
- `.env` — default environment variable values (committed, safe defaults only)

---

## Translation (i18n)

The project uses `next-intl` for runtime i18n and [Crowdin](https://l.crowdin.com/next-js) for translation management.

Translation files live in `src/locales/`. The English file (`en.json`) is the source of truth. Crowdin automatically synchronises changes on every push to `main`.

To validate translations locally:

```shell
pnpm check:i18n
```

### Crowdin setup

1. Create an account at [Crowdin.com](https://l.crowdin.com/next-js) and create a new project
2. Copy the **Project ID** from the project settings
3. Generate a **Personal Access Token** (Account Settings > API)
4. Add `CROWDIN_PROJECT_ID` and `CROWDIN_PERSONAL_TOKEN` as GitHub Actions secrets

Once set, translations are synchronised on every push to `main` and on every pull request.

---

## Security

This boilerplate ships with Fintech-grade security defaults out of the box.

### HTTP security headers

Applied globally in `next.config.ts`:

| Header | Value |
| --- | --- |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `X-XSS-Protection` | `0` (disabled — rely on CSP per OWASP guidance) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()` |
| `X-DNS-Prefetch-Control` | `on` |

### Arcjet (bot protection + WAF)

[Arcjet](https://launch.arcjet.com/Q6eLbRE) is configured in `src/libs/Arcjet.ts` and applied in `src/proxy.ts` (Next.js middleware).

- **Shield WAF** — blocks SQL injection, XSS, and other OWASP Top 10 attacks on every request
- **Bot detection** — allows search engines, preview link generators, and uptime monitors; blocks scrapers and AI crawlers
- In development, Arcjet is skipped if `ARCJET_KEY` is not set
- In production, the app throws at startup if `ARCJET_KEY` is missing

To enable Arcjet, [create a free account](https://launch.arcjet.com/Q6eLbRE) and add your key:

```shell
ARCJET_KEY=ajkey_your_key_here
```

### Sentry (error monitoring, PII-safe)

Sentry is configured with strict PII protection:

- `sendDefaultPii: false` — no automatic user identity attached to events
- `maskAllText: true`, `maskAllInputs: true`, `blockAllMedia: true` — session replay captures no sensitive data
- Trace sample rate: `0.1` (10%) — reduced to limit data exposure
- Replay sample rate: `0.1` on error only

For production, add to your hosting provider:

```shell
NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
SENTRY_ORGANIZATION=your-org-slug
SENTRY_PROJECT=your-project-slug
SENTRY_AUTH_TOKEN=your-auth-token
```

### Server-only logger

`src/libs/Logger.ts` is guarded with `import 'server-only'`. It cannot be accidentally imported in client components. All logs use structured JSON format (LogTape) and are forwarded to Better Stack in production.

---

## Error monitoring

### Local development

No setup needed. Sentry Spotlight runs alongside the dev server and captures all errors at [http://localhost:8969](http://localhost:8969).

### Production

```shell
NEXT_PUBLIC_SENTRY_DSN=https://...
SENTRY_ORGANIZATION=your-org
SENTRY_PROJECT=your-project
SENTRY_AUTH_TOKEN=sntrys_...
```

---

## Logging

Server-side structured logging is provided by [LogTape](https://logtape.org). Import the logger in any server component or API route:

```ts
import { logger } from '@/libs/Logger';

logger.info('Payment initiated', { amount: 100, currency: 'USD' });
```

In development, logs are printed to the console in JSON Lines format.

For production log management, integrate [Better Stack](https://betterstack.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=sachidananda-panigrahi):

1. Create a Better Stack account → Logs → Sources → Connect source (Node.js)
2. Copy the **source token** and **ingesting host**
3. Add as **server-side** environment variables (not `NEXT_PUBLIC_`):

```shell
BETTER_STACK_SOURCE_TOKEN=your_token
BETTER_STACK_INGESTING_HOST=in.logs.betterstack.com
```

---

## Checkly monitoring

[Checkly](https://www.checklyhq.com/?utm_source=github&utm_medium=sponsorship&utm_campaign=sachidananda-panigrahi) runs tests ending in `*.check.e2e.ts` against your deployed environment at regular intervals.

Setup:

1. Create a Checkly account and generate an API key
2. Add `CHECKLY_API_KEY` and `CHECKLY_ACCOUNT_ID` as GitHub Actions secrets
3. Update `checkly.config.ts` with your project name and email address

Tests run automatically after every successful deployment via the `checkly.yml` workflow.

---

## Testing

### Unit tests

Unit test files follow the `*.test.ts` / `*.test.tsx` pattern and live next to their implementation files.

```shell
pnpm test
```

Coverage is reported to [Codecov](https://codecov.io) in CI. Add `CODECOV_TOKEN` as a GitHub Actions secret to enable it.

### E2E tests

E2E tests use Playwright and live in `tests/e2e/`. Files ending in `*.check.e2e.ts` are also picked up by Checkly for production monitoring.

```shell
npx playwright install  # first time only
pnpm test:e2e
```

---

## Build

### Local production build

```shell
pnpm build-local
```

Runs `next build` using only local environment variables (`.env`). No database or external services required.

### CI / production build

```shell
pnpm build
```

Same as `build-local`. Add the required environment variables in your hosting provider's dashboard.

### Start the production server

```shell
pnpm start
```

Serves the output of `pnpm build` on [http://localhost:3000](http://localhost:3000).

---

## Useful commands

### Code quality

| Command | Description |
| --- | --- |
| `pnpm lint` | Run Oxlint via Ultracite |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm check:types` | TypeScript type checking (`tsc --noEmit`) |
| `pnpm check:deps` | Detect unused files and dependencies (Knip) |
| `pnpm check:i18n` | Validate translation completeness |

### Testing

| Command | Description |
| --- | --- |
| `pnpm test` | Run unit tests with Vitest |
| `pnpm test:e2e` | Run E2E tests with Playwright |

### Build

| Command | Description |
| --- | --- |
| `pnpm build-local` | Production build (local env) |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm build-stats` | Bundle analysis (opens browser) |
| `pnpm clean` | Remove `.next`, `out`, and `coverage` directories |

### Development

| Command | Description |
| --- | --- |
| `pnpm dev` | Start dev server + Spotlight |

---

## Commit message format

The project follows [Conventional Commits](https://www.conventionalcommits.org/). All commit messages must start with a type prefix:

| Type | Description |
| --- | --- |
| `feat` | New feature or functionality |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Code formatting without logic changes |
| `refactor` | Code restructuring without behaviour changes |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `build` | Build system changes |
| `ci` | CI configuration and scripts |
| `chore` | Maintenance tasks (dependencies, config) |
| `revert` | Reverts a previous commit |

Example: `feat: add payment intent API route`

---

## CodeRabbit AI code reviews

[CodeRabbit](https://www.coderabbit.ai?utm_source=next_js_starter&utm_medium=github&utm_campaign=next_js_starter_oss_2025) monitors the repository and automatically reviews all new pull requests.

Setup: visit [coderabbit.ai](https://www.coderabbit.ai), sign in with GitHub, and add your repository.

---

## VSCode

Install the recommended extensions from `.vscode/extensions.json` for the best experience. The workspace includes:

- Integrated debug configuration for both frontend and API routes
- Vitest extension for inline test results and coverage
- Oxlint and Oxfmt for formatting and linting on save

---

## Contributions

Everyone is welcome to contribute. Open an issue for questions or bugs. Pull requests are welcome.

---

## License

Licensed under the MIT License, Copyright © 2026

See [LICENSE](LICENSE) for more information.

---

Maintained by [sachidananda-panigrahi](https://github.com/sachidananda-panigrahi)

For updates and issues, use the [repository issue tracker](https://github.com/sachidananda-panigrahi/next-js-boilerplate/issues).
