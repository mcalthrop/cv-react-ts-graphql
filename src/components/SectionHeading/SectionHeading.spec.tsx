import { render, screen } from 'src/testUtils';
import { SectionHeading } from './SectionHeading';

describe('SectionHeading', () => {
  it('renders heading text', () => {
    render(<SectionHeading heading="Test Section" />);

    expect(screen.getByRole('heading', { name: 'Test Section' })).toBeInTheDocument();
  });

  it('renders as h2 element', () => {
    render(<SectionHeading heading="Test Section" />);

    const heading = screen.getByRole('heading', { name: 'Test Section' });
    expect(heading.tagName).toBe('H2');
  });

  it('applies correct styling', () => {
    render(<SectionHeading heading="Test Section" />);

    const heading = screen.getByRole('heading', { name: 'Test Section' });
    expect(heading).toHaveClass('chakra-heading');
  });

  it('handles empty heading', () => {
    render(<SectionHeading heading="" />);

    const heading = screen.getByRole('heading');
    expect(heading).toHaveTextContent('');
  });

  it('handles special characters in heading', () => {
    const headingText = 'Special & Characters! @#$';
    render(<SectionHeading heading={headingText} />);

    expect(screen.getByRole('heading', { name: headingText })).toBeInTheDocument();
  });
});
