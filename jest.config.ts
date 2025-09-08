import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [''],
  },
  setupFiles: ['<rootDir>/src/setupTests.ts'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTestsAfterEnv.ts'],
  globals: {
    fetch: global.fetch,
    Request: global.Request,
    Response: global.Response,
    Headers: global.Headers,
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.config.*',
    '!src/setupTestsAfterEnv.ts',
    '!src/components/chakra/**',
    '!src/mocks/**',
    '!src/index.tsx',
    '!src/components/CvContainer/**',
    '!**/index.ts',
    '!src/graphql/**',
    '!codegen.ts',
  ],
  coverageReporters: ['text', 'json', 'html'],
  coverageThreshold: {
    global: {
      lines: 100,
      statements: 100,
      branches: 100,
      functions: 100,
    },
  },
  preset: 'ts-jest',
};

export default createJestConfig(config);
