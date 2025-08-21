import { createSystem, defineConfig, defaultConfig, defineRecipe } from '@chakra-ui/react';

const linkRecipe = defineRecipe({
  className: 'link',
  base: {
    color: 'blue.600',
    _hover: {
      textDecorationThickness: '1px',
    },
  },
});

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Roboto, sans-serif' },
        body: { value: 'Roboto, sans-serif' },
      },
    },
    recipes: {
      Link: linkRecipe,
    },
  },
});

export const chakraSystem = createSystem(defaultConfig, customConfig);
