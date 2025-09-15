import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: [],
  project: ['src/**'],
  ignore: [
    'src/graphql/generated/**',
    'coverage/**',
    '.next/**',
  ],
  ignoreDependencies: [
    // Used in codegen config files implicitly
    '@graphql-typed-document-node/core',
  ],
  ignoreBinaries: ['scripts/fix-generated-graphql-types.sh'],
  includeEntryExports: true,
  rules: {
    binaries: 'warn',
    classMembers: 'error',
    dependencies: 'error',
    devDependencies: 'error',
    duplicates: 'error',
    enumMembers: 'error',
    exports: 'error',
    files: 'error',
    nsExports: 'error',
    nsTypes: 'error',
    types: 'error',
    unlisted: 'error',
    unresolved: 'error',
  },

  // --- BEGIN PLUGINS ---
  oxlint: {
    config: ['.oxlintrc.json'],
  },

  'github-actions': {
    config: [
      '.github/workflows/*.{yml,yaml}',
      '.github/actions/**/*.{yml,yaml,js}',
    ],
  },

  'graphql-codegen': {
    config: ['codegen.ts'],
  },

  husky: {
    config: ['.husky/{pre,post}-*'],
  },

  vitest: {
    config: ['vitest.config.ts'],
    entry: ['src/**/*.spec.{ts,tsx}'],
  },

  msw: true,

  next: {
    entry: ['next.config.ts', 'src/**/*.{ts,tsx}'],
  },

  prettier: {
    config: ['.prettierrc.json'],
  },

  typescript: {
    config: ['tsconfig.json'],
  },

  'vercel-og': true,

  webpack: false,
  // --- END PLUGINS ---
};

export default config;
