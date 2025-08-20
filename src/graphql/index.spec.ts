import * as graphqlModule from './index';
import * as apolloClientModule from './apolloClient';

describe('graphql index', () => {
  it('exports all apolloClient module exports', () => {
    expect(graphqlModule.createApolloClient).toBe(apolloClientModule.createApolloClient);
  });

  it('exports createApolloClient function', () => {
    expect(typeof graphqlModule.createApolloClient).toBe('function');
  });
});
