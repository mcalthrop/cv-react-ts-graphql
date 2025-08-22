'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import { chakraTheme } from './theme';

export const CustomChakraProvider = (
  props: ColorModeProviderProps,
): JSX.Element => (
  <ChakraProvider value={chakraTheme}>
    <ColorModeProvider {...props} />
  </ChakraProvider>
);
