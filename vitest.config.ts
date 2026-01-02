import path from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  test: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/setup-tests-after-env.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 100,
        statements: 100,
        branches: 100,
        functions: 100,
      },
      exclude: [
        '.next',
        'coverage/**',
        '**/*.d.ts',
        '**/*.config.*',
        'src/setup-tests-after-env.ts',
        'src/components/chakra/**',
        'src/mocks/**',
        'src/index.tsx',
        'src/components/CvContainer/**', // Can't test server components with vitest: https://nextjs.org/docs/app/guides/testing/vitest
        '**/index.ts',
        'src/graphql/**',
        'codegen.ts',
        'knip.ts',
      ],
    },
  },
});
