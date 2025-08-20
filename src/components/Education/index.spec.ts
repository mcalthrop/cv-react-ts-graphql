import * as educationModule from './index';
import * as educationComponentModule from './Education';

describe('Education index', () => {
  it('exports Education component', () => {
    expect(educationModule.Education).toBe(educationComponentModule.Education);
  });

  it('exports expected component', () => {
    expect(typeof educationModule.Education).toBe('function');
  });
});
