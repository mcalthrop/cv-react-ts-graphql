import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Roboto, sans-serif' },
        body: { value: 'Roboto, sans-serif' },
      },
    },
  },
});

export const chakraSystem = createSystem(defaultConfig, customConfig);
