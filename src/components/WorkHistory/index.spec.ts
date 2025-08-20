import * as workHistoryModule from './index';
import * as workHistoryComponentModule from './WorkHistory';

describe('WorkHistory index', () => {
  it('exports WorkHistory component', () => {
    expect(workHistoryModule.WorkHistory).toBe(workHistoryComponentModule.WorkHistory);
  });

  it('exports expected component', () => {
    expect(typeof workHistoryModule.WorkHistory).toBe('function');
  });
});