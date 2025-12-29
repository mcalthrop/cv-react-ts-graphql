import { render, screen } from '@/testUtils';
import { Section } from './Section';

describe('Section', () => {
  it('renders children content', () => {
    render(
      <Section>
        <p>Test content</p>
      </Section>,
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders heading when provided', () => {
    render(
      <Section heading={'Test Heading'}>
        <p>Test content</p>
      </Section>,
    );

    expect(
      screen.getByRole('heading', { level: 2, name: 'Test Heading' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('does not render heading when not provided', () => {
    render(
      <Section>
        <p>Test content</p>
      </Section>,
    );

    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('handles empty children gracefully', () => {
    render(<Section heading={'Empty Section'} />);

    expect(
      screen.getByRole('heading', { name: 'Empty Section' }),
    ).toBeInTheDocument();
  });
});
