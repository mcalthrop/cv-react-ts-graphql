'use client';

import type { PropsWithChildren } from 'react';
import { CustomChakraProvider } from '../components/chakra/provider';

export const ChakraWrapper = ({ children }: PropsWithChildren): JSX.Element => (
  <CustomChakraProvider>{children}</CustomChakraProvider>
);
