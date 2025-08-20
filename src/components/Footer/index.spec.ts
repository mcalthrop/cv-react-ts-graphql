import * as footerModule from './index';
import * as footerComponentModule from './Footer';

describe('Footer index', () => {
  it('exports Footer component', () => {
    expect(footerModule.Footer).toBe(footerComponentModule.Footer);
  });

  it('exports expected component', () => {
    expect(typeof footerModule.Footer).toBe('function');
  });
});