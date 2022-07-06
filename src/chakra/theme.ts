import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
  styles: {
    global: {
      p: {
        lineHeight: '120%',
      },
    },
  },
  components: {
    Heading: {
      sizes: {
        xl: {
          fontWeight: 200,
        },
      },
    },
  },
});
