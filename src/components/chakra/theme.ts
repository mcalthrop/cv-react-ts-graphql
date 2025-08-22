import { createSystem, defaultConfig, defineRecipe } from '@chakra-ui/react';

export const chakraTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Roboto' },
        body: { value: 'Roboto' },
      },
    },
    recipes: {
      heading: defineRecipe({
        base: { fontWeight: 'extralight' },
        variants: {
          size: {
            xl: {
              fontSize: 'var(--chakra-font-sizes-3xl)',
            },
            lg: {
              fontSize: 'var(--chakra-font-sizes-2xl)',
            },
            md: {
              fontSize: 'var(--chakra-font-sizes-xl)',
              fontWeight: 'var(--chakra-font-weights-normal)',
            },
          },
        },
      }),
      text: defineRecipe({
        base: { lineHeight: '120%' },
      }),
    },
  },
  globalCss: {
    a: {
      colorPalette: 'blue',
    },
  },
});
