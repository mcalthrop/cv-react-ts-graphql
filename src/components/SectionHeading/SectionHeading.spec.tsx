import { render, screen } from '@/testUtils';
import { SectionHeading } from './SectionHeading';

describe('SectionHeading', () => {
  it('renders heading text', () => {
    render(<SectionHeading heading={'Test Section'} />);

    expect(screen.getByRole('heading', { name: 'Test Section', level: 2 })).toBeInTheDocument();
  });

  it('renders as h2 element', () => {
    render(<SectionHeading heading={'Test Section'} />);

    const heading = screen.getByRole('heading', { name: 'Test Section', level: 2 });
    expect(heading.tagName).toBe('H2');
  });

  it('applies correct styling', () => {
    render(<SectionHeading heading={'Test Section'} />);

    const heading = screen.getByRole('heading', { name: 'Test Section', level: 2 });
    expect(heading).toHaveClass('chakra-heading');
  });

  it('handles empty heading', () => {
    render(<SectionHeading heading={''} />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toHaveTextContent('');
  });

  it('handles special characters in heading', () => {
    const headingText = 'Special & Characters! @#$';
    render(<SectionHeading heading={headingText} />);

    expect(screen.getByRole('heading', { name: headingText, level: 2 })).toBeInTheDocument();
  });
});
