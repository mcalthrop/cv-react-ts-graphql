import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import { ChakraProvider } from '@chakra-ui/react';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { FC, ReactElement, ReactNode } from 'react';
import { chakraSystem } from './chakra';

export const AllTheProviders: FC = ({ children }: { children?: ReactNode }) => {
  return (
    <ApolloProvider>
      <ChakraProvider value={chakraSystem}>{children}</ChakraProvider>
    </ApolloProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
