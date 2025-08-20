import * as interestsModule from './index';
import * as interestsComponentModule from './Interests';

describe('Interests index', () => {
  it('exports Interests component', () => {
    expect(interestsModule.Interests).toBe(interestsComponentModule.Interests);
  });

  it('exports expected component', () => {
    expect(typeof interestsModule.Interests).toBe('function');
  });
});
