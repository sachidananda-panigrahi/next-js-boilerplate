import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  // Files to exclude from Knip analysis
  ignore: [
    'checkly.config.ts',
    'src/libs/I18n.ts',
    'src/libs/Logger.ts', // Server-side logging infrastructure — used when routes/handlers call logger
    'src/types/I18n.ts',
    'tests/**/*.ts',
  ],
  // Dependencies to ignore during analysis
  ignoreDependencies: [
    '@faker-js/faker', // Test data generation utility — kept for future test authoring
    '@hookform/resolvers', // Form validation resolvers — kept as boilerplate for form-heavy features
    '@logtape/logtape', // Used by Logger.ts (ignored above)
    '@platformatic/next', // Watt runtime capability — loaded by wattpm from watt.json, not imported in code
    '@swc/helpers', // Avoid error in CI: "`npm ci` can only install packages when your package.json and package-lock.json or npm-shrinkwrap.json are in sync."
    'lefthook', // Git hook runner — read from lefthook.yml, not imported in code
    'react-hook-form', // Form state management — kept as boilerplate for form-heavy features
    'server-only', // Used by Logger.ts (ignored above) to prevent client-side import
  ],
  // Binaries to ignore during analysis
  ignoreBinaries: [
    'dotenv', // Used in checkly.yml via `npx dotenv -c production`
    'production', // Argument to dotenv -c, not a binary
  ],
  compilers: {
    css: (text: string) => [...text.matchAll(/(?<=@)import[^;]+/gu)].join('\n'),
  },
};

export default config;
