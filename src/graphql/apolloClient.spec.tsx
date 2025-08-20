import { ApolloClient, InMemoryCache } from '@apollo/client';
import { createApolloClient } from './apolloClient';
import { createContentfulGraphQlUri } from 'src/contentful';
import { vi } from 'vitest';

vi.mock('src/contentful', () => ({
  createContentfulGraphQlUri: vi.fn(),
}));

const mockCreateContentfulGraphQlUri = createContentfulGraphQlUri as ReturnType<typeof vi.fn>;

describe('createApolloClient', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockCreateContentfulGraphQlUri.mockReturnValue('https://test-graphql-uri.com');
  });

  it('creates an Apollo Client instance', () => {
    const client = createApolloClient();

    expect(client).toBeInstanceOf(ApolloClient);
  });

  it('creates client with InMemoryCache', () => {
    const client = createApolloClient();

    expect(client.cache).toBeInstanceOf(InMemoryCache);
  });

  it('uses URI from createContentfulGraphQlUri', () => {
    createApolloClient();

    expect(mockCreateContentfulGraphQlUri).toHaveBeenCalledTimes(1);
    expect(mockCreateContentfulGraphQlUri).toHaveBeenCalledWith();
  });

  it('creates HTTP link with correct URI', () => {
    const testUri = 'https://test-contentful.com/graphql';
    mockCreateContentfulGraphQlUri.mockReturnValue(testUri);

    const client = createApolloClient();

    expect(client.link).toBeDefined();
    expect(mockCreateContentfulGraphQlUri).toHaveBeenCalledTimes(1);
  });

  it('returns different instances on multiple calls', () => {
    const client1 = createApolloClient();
    const client2 = createApolloClient();

    expect(client1).not.toBe(client2);
    expect(client1.cache).not.toBe(client2.cache);
  });
});
