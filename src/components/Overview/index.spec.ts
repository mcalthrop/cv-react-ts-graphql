import * as overviewModule from './index';
import * as overviewComponentModule from './Overview';

describe('Overview index', () => {
  it('exports Overview component', () => {
    expect(overviewModule.Overview).toBe(overviewComponentModule.Overview);
  });

  it('exports expected component', () => {
    expect(typeof overviewModule.Overview).toBe('function');
  });
});