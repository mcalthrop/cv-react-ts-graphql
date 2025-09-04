import { createContentfulGraphQlUri } from '@/contentful';
import { HttpLink } from '@apollo/client';
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client-integration-nextjs';

const uri = createContentfulGraphQlUri();

// Source: https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs#in-rsc
export const { getClient, query, PreloadQuery } = registerApolloClient(
  () =>
    new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri,
        fetchOptions: {
          // you can pass additional options that should be passed to `fetch` here,
          // e.g. Next.js-related `fetch` options regarding caching and revalidation
          // see https://nextjs.org/docs/app/api-reference/functions/fetch#fetchurl-options
          next: { revalidate: 60 }, // Allow for Contentful data to be updated
        },
      }),
    }),
);
