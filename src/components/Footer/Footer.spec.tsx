import { render, screen } from 'src/testUtils';
import { Footer } from './Footer';
import { vi } from 'vitest';

describe('Footer', () => {
  beforeAll(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2024-01-01'));
  });

  afterAll(() => {
    vi.useRealTimers();
  });

  it('renders copyright text with current year', () => {
    render(<Footer />);

    expect(screen.getByText('Copyright © Matt Calthrop 2018-2024')).toBeInTheDocument();
  });

  it('uses current year dynamically', () => {
    vi.setSystemTime(new Date('2027-06-15'));
    render(<Footer />);

    expect(screen.getByText('Copyright © Matt Calthrop 2018-2027')).toBeInTheDocument();
  });

  it('has correct styling', () => {
    render(<Footer />);

    const footerText = screen.getByText(/Copyright ©/);
    expect(footerText).toHaveClass('chakra-text');
  });
});
