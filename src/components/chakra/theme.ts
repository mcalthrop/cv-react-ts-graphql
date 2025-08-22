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
            xl: { fontSize: '3xl' },
            lg: { fontSize: '2xl' },
            md: { fontSize: 'xl', fontWeight: 'normal' },
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
