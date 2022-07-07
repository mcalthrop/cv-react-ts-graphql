import { extendTheme } from '@chakra-ui/react';

export const chakraTheme = extendTheme({
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
});
