import * as chakraModule from './index';
import * as themeModule from './theme';

describe('chakra index', () => {
  it('exports all theme module exports', () => {
    expect(chakraModule.chakraTheme).toBe(themeModule.chakraTheme);
  });

  it('exports chakraTheme', () => {
    expect(typeof chakraModule.chakraTheme).toBe('object');
    expect(chakraModule.chakraTheme).toBeDefined();
  });
});