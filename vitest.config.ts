import { defineConfig } from 'vitest/config';
import path from 'path';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTestsAfterEnv.ts'],
    css: true,
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
        '**/*.d.ts',
        '.eslintrc.js',
        '.next/**',
        '.yarn/**',
        '*.config.*',
        'coverage/**',
        'src/components/chakra/**',
        'src/contentful/**',
        'src/graphql-types.tsx',
        'src/graphql/**',
        'src/mocks/**',
        'src/pages/**',
        'src/styles/**',
        'src/testUtils.ts',
      ],
    },
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    jsxInject: "import React from 'react'",
  },
});
