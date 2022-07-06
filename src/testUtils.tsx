import { MockedProvider as ApolloProvider } from '@apollo/client/testing';
import type { RenderOptions } from '@testing-library/react';
import { render } from '@testing-library/react';
import type { FC, ReactElement, ReactNode } from 'react';

export const AllTheProviders: FC = ({ children }: { children?: ReactNode }) => {
  return <ApolloProvider>{children}</ApolloProvider>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
