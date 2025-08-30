'use client';

import { ApolloProvider } from '@apollo/client/react';
import { createApolloClient } from '@/graphql';
import type { PropsWithChildren } from 'react';

const apolloClient = createApolloClient();

export const ApolloWrapper = ({
  children,
}: PropsWithChildren): React.JSX.Element => (
  <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
);
