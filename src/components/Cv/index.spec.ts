import * as cvModule from './index';
import * as cvComponentModule from './CvComponent';
import * as cvContainerModule from './CvContainer';

describe('Cv index', () => {
  it('exports CvComponent', () => {
    expect(cvModule.CvComponent).toBe(cvComponentModule.CvComponent);
  });

  it('exports CvContainer', () => {
    expect(cvModule.CvContainer).toBe(cvContainerModule.CvContainer);
  });

  it('exports all expected components', () => {
    expect(typeof cvModule.CvComponent).toBe('function');
    expect(typeof cvModule.CvContainer).toBe('function');
  });
});