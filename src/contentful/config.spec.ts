import {
  createContentfulGraphQlSchemaUri,
  createContentfulGraphQlUri,
} from './config';

describe('contentful config', () => {
  describe('createContentfulGraphQlUri', () => {
    it('returns correct Contentful GraphQL URI', () => {
      const uri = createContentfulGraphQlUri();

      expect(uri).toBe(
        'https://graphql.contentful.com/content/v1/spaces/8nmbnmef5jq7?access_token=2b0af88ae087bef7c88668c9a00cd778656e22d726598b797a246415c9176eaf',
      );
    });
  });

  describe('createContentfulGraphQlSchemaUri', () => {
    it('returns correct Contentful GraphQL Schema URI', () => {
      const uri = createContentfulGraphQlSchemaUri();

      expect(uri).toBe(
        'https://graphql.contentful.com/content/v1/spaces/8nmbnmef5jq7/environments/master?access_token=2b0af88ae087bef7c88668c9a00cd778656e22d726598b797a246415c9176eaf',
      );
    });
  });
});
