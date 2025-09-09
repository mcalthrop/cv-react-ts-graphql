// Source: https://github.com/kasperpeulen/vitest-plugin-rsc?tab=readme-ov-file#3-boot-the-runtime
import { beforeAll, beforeEach } from 'vitest';
import { cleanup, initialize } from 'vitest-plugin-rsc/nextjs/testing-library';
import '@testing-library/jest-dom';
import { server } from './mocks/node';

beforeAll(() => {
  initialize(); // ⬅️ spins up the RSC runtime
  server.start();
});

beforeEach(async () => {
  await cleanup(); // ⬅️ reset DOM between tests
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.stop();
});
