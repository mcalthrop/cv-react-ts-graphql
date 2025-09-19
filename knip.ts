import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: [],
  project: ['src/**'],
  ignore: [
    '.next/**',
    'coverage/**',
    'src/components/chakra/**',
    'src/graphql/createApolloClient.tsx',
    'src/graphql/generated/**',
  ],
  ignoreDependencies: [
    // Used by files created by codegen
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
  'github-actions': true,
  'graphql-codegen': true,
  husky: true,
  msw: true,
  next: true,
  oxlint: true,
  prettier: true,
  typescript: true,
  'vercel-og': true,
  vitest: true,
  // --- END PLUGINS ---
};

export default config;
