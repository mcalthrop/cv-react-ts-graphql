import { defineConfig } from 'vitest/config';
import { vitestPluginRSC } from 'vitest-plugin-rsc';
import { vitestPluginNext } from 'vitest-plugin-rsc/nextjs/plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react(), vitestPluginRSC(), vitestPluginNext()],
  test: {
    browser: {
      enabled: true,
      provider: 'playwright',
      instances: [{ browser: 'chromium' }],
    },
    globals: true,
    environment: 'jsdom',
    // setupFiles: ['./src/setupTestsAfterEnv.ts'],
    setupFiles: ['./src/vitest.setup.ts'],
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
        'src/setupTestsAfterEnv.ts',
        'src/components/chakra/**',
        'src/mocks/**',
        'src/index.tsx',
        'src/components/CvContainer/**', // Can't test server components with vitest: https://nextjs.org/docs/app/guides/testing/vitest
        '**/index.ts',
        'src/graphql/**',
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
