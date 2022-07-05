import type { Config } from '@jest/types';

/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

const config: Config.InitialOptions = {
  // Assume CI environment: snapshot update will fail the test
  ci: true,
  // Automatically clear mock calls and instances between every test
  clearMocks: true,
  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  moduleNameMapper: {
    'src/(.*)': '<rootDir>/$1',
    '^.+\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',
  // A list of paths to directories that Jest should use to search for files in
  roots: ['src'],
  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  setupFilesAfterEnv: ['./src/setupTestsAfterEnv.ts'],
  // The test environment that will be used for testing
  testEnvironment: 'jsdom',
  // Indicates whether each individual test should be reported during the run
  verbose: true,
};

export default config;
