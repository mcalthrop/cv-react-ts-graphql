import * as sectionHeadingModule from './index';
import * as sectionHeadingComponentModule from './SectionHeading';

describe('SectionHeading index', () => {
  it('exports SectionHeading component', () => {
    expect(sectionHeadingModule.SectionHeading).toBe(sectionHeadingComponentModule.SectionHeading);
  });

  it('exports expected component', () => {
    expect(typeof sectionHeadingModule.SectionHeading).toBe('function');
  });
});