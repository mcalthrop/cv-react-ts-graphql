import * as onTheWebModule from './index';
import * as onTheWebComponentModule from './OnTheWeb';

describe('OnTheWeb index', () => {
  it('exports OnTheWeb component', () => {
    expect(onTheWebModule.OnTheWeb).toBe(onTheWebComponentModule.OnTheWeb);
  });

  it('exports expected component', () => {
    expect(typeof onTheWebModule.OnTheWeb).toBe('function');
  });
});
