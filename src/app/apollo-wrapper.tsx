'use client';

import { ApolloProvider } from '@apollo/client';
import { createApolloClient } from '../graphql';
import type { PropsWithChildren } from 'react';

const apolloClient = createApolloClient();

export const ApolloWrapper = ({ children }: PropsWithChildren): JSX.Element => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);
