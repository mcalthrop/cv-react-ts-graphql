import * as contentfulModule from './index';
import * as configModule from './config';

describe('contentful index', () => {
  it('exports all config module exports', () => {
    expect(contentfulModule.createContentfulGraphQlUri).toBe(configModule.createContentfulGraphQlUri);
  });

  it('exports createContentfulGraphQlUri function', () => {
    expect(typeof contentfulModule.createContentfulGraphQlUri).toBe('function');
  });
});
