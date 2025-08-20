import { chakraTheme } from './theme';

describe('chakraTheme', () => {
  it('has correct font configuration', () => {
    expect(chakraTheme.fonts).toMatchObject({
      heading: 'Roboto',
      body: 'Roboto',
    });
  });

  it('has correct global styles for paragraphs', () => {
    expect(chakraTheme.styles.global.p).toEqual({
      lineHeight: '120%',
    });
  });

  it('has correct Link component base styles', () => {
    expect(chakraTheme.components.Link.baseStyle).toMatchObject({
      color: 'blue.600',
      ':hover': {
        textDecorationThickness: '1px',
      },
    });
  });

  it('has correct Heading component sizes', () => {
    expect(chakraTheme.components.Heading.sizes).toMatchObject({
      md: {
        fontWeight: 400,
      },
      lg: {
        fontWeight: 300,
      },
      xl: {
        fontWeight: 300,
      },
    });
  });

  it('extends the default Chakra theme', () => {
    // Should have default Chakra properties plus our custom ones
    expect(chakraTheme).toHaveProperty('colors');
    expect(chakraTheme).toHaveProperty('fonts');
    expect(chakraTheme).toHaveProperty('styles');
    expect(chakraTheme).toHaveProperty('components');
  });

  it('has consistent font weight for large headings', () => {
    const { lg, xl } = chakraTheme.components.Heading.sizes;
    expect(lg.fontWeight).toBe(xl.fontWeight);
    expect(lg.fontWeight).toBe(300);
  });
});