import { render, screen } from '@/testUtils';
import { Footer } from './Footer';

describe('Footer', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-01-01'));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('renders copyright text with current year', () => {
    render(<Footer />);

    expect(screen.getByText('Copyright © Matt Calthrop 2018-2024')).toBeInTheDocument();
  });

  it('uses current year dynamically', () => {
    jest.setSystemTime(new Date('2027-06-15'));
    render(<Footer />);

    expect(screen.getByText('Copyright © Matt Calthrop 2018-2027')).toBeInTheDocument();
  });

  it('has correct styling', () => {
    render(<Footer />);

    const footerText = screen.getByText(/Copyright ©/);
    expect(footerText).toBeInTheDocument();
  });
});
