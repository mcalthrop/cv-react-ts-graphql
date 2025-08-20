import { createContentfulGraphQlUri } from './config';

describe('contentful config', () => {
  describe('createContentfulGraphQlUri', () => {
    it('returns correct Contentful GraphQL URI', () => {
      const uri = createContentfulGraphQlUri();
      
      expect(uri).toBe(
        'https://graphql.contentful.com/content/v1/spaces/8nmbnmef5jq7?access_token=2b0af88ae087bef7c88668c9a00cd778656e22d726598b797a246415c9176eaf'
      );
    });

    it('includes the correct space ID', () => {
      const uri = createContentfulGraphQlUri();
      
      expect(uri).toContain('spaces/8nmbnmef5jq7');
    });

    it('includes the correct access token', () => {
      const uri = createContentfulGraphQlUri();
      
      expect(uri).toContain('access_token=2b0af88ae087bef7c88668c9a00cd778656e22d726598b797a246415c9176eaf');
    });

    it('uses HTTPS protocol', () => {
      const uri = createContentfulGraphQlUri();
      
      expect(uri.startsWith('https://')).toBe(true);
    });

    it('uses correct Contentful GraphQL endpoint', () => {
      const uri = createContentfulGraphQlUri();
      
      expect(uri).toContain('graphql.contentful.com/content/v1');
    });
  });
});