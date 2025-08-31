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
        '.next',
        'coverage/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/node_modules/**',
        'src/setupTestsAfterEnv.ts',
        'src/components/chakra/**',
        'src/mocks/**',
        'src/index.tsx',
        'src/components/CvContainer/CvContainer.tsx', // Can't test server components with vitest 🤷‍♂️
        '**/index.ts',
        'src/graphql/**',
        'src/chakra/**',
        '.eslintrc.js',
        'codegen.ts',
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  esbuild: {
    jsxInject: "import React from 'react'",
  },
});
