/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
const viteConfig = defineConfig({
  build: {
    // https://rollupjs.org/guide/en/#big-list-of-options
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react'],
          reactDom: ['react-dom/client'],
          apollo: ['@apollo/client'],
          chakra: ['@chakra-ui/react'],
        },
      },
    },
  },
  clearScreen: false,
  envPrefix: 'REACT_APP_',
  plugins: [react()],
  resolve: {
    alias: [{ find: 'src', replacement: path.resolve(__dirname, '/src') }],
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTestsAfterEnv.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      reportsDirectory: './coverage',
      exclude: [
        'coverage/**',
        'dist/**',
        '**/*.d.ts',
        '**/*.config.*',
        '**/node_modules/**',
        '**/.yarn/**',
        'src/setupTestsAfterEnv.ts',
        'src/mocks/**',
        'src/graphql-types.tsx',
        'src/index.tsx',
        'babel.config.js',
        '.eslintrc.js',
      ],
      thresholds: {
        global: {
          branches: 100,
          functions: 100,
          lines: 100,
          statements: 100,
        },
      },
    },
  },
});

export default viteConfig;
