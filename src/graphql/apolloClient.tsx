import type { NormalizedCacheObject } from '@apollo/client';
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { createContentfulGraphQlUri } from 'src/contentful';

export function createApolloClient(): ApolloClient<NormalizedCacheObject> {
  const uri = createContentfulGraphQlUri();
  const link = createHttpLink({ uri });
  const cache = new InMemoryCache();

  return new ApolloClient({ link, cache });
}
