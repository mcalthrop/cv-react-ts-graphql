import { createSystem, defaultConfig } from '@chakra-ui/react';
import { defineConfig } from '@chakra-ui/react';

export const chakraTheme__OLD = defineConfig({
  theme: {
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
    },
    styles: {
      global: {
        p: {
          lineHeight: '120%',
        },
      },
    },
    components: {
      Link: {
        baseStyle: {
          color: 'blue.600',
          ':hover': {
            textDecorationThickness: '1px',
          },
        },
      },
      Heading: {
        sizes: {
          md: {
            fontWeight: 400,
          },
          lg: {
            fontWeight: 300,
          },
          xl: {
            fontWeight: 300,
          },
        },
      },
    },
  },
});

export const chakraTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Roboto' },
        body: { value: 'Roboto' },
      },
    },
  },
});
