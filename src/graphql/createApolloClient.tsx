import { ApolloClient, InMemoryCache } from '@apollo/client';
import { HttpLink } from '@apollo/client/link/http';
import { createContentfulGraphQlUri } from '@/contentful';

export const createApolloClient = (): ApolloClient => {
  const uri = createContentfulGraphQlUri();
  const link = new HttpLink({ uri });
  const cache = new InMemoryCache();

  return new ApolloClient({ link, cache });
};
