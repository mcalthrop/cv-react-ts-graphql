import { render, screen } from 'src/testUtils';
import { LocationDuration } from './LocationDuration';

describe('LocationDuration', () => {
  it('renders location and date range with bullet separator', () => {
    render(<LocationDuration location={'London, UK'} dateFrom={'2020-01'} dateTo={'Present'} />);

    expect(screen.getByText('London, UK • 2020-01-Present')).toBeInTheDocument();
  });

  it('renders with only location', () => {
    render(<LocationDuration location={'London, UK'} dateFrom={undefined} dateTo={undefined} />);

    expect(screen.getByText('London, UK • -')).toBeInTheDocument();
  });

  it('renders with only dates', () => {
    render(<LocationDuration location={undefined} dateFrom={'2020-01'} dateTo={'Present'} />);

    expect(screen.getByText(/2020-01/)).toBeInTheDocument();
    expect(screen.getByText(/Present/)).toBeInTheDocument();
    expect(screen.getByText(/•/)).toBeInTheDocument();
  });

  it('renders with all undefined props', () => {
    render(<LocationDuration location={undefined} dateFrom={undefined} dateTo={undefined} />);

    expect(screen.getByText(/•/)).toBeInTheDocument();
  });

  it('renders with missing dateTo', () => {
    render(<LocationDuration location={'Remote'} dateFrom={'2019-06'} dateTo={undefined} />);

    expect(screen.getByText('Remote • 2019-06-')).toBeInTheDocument();
  });

  it('renders with missing dateFrom', () => {
    render(<LocationDuration location={'New York'} dateFrom={undefined} dateTo={'2021-12'} />);

    expect(screen.getByText('New York • -2021-12')).toBeInTheDocument();
  });

  it('handles empty strings', () => {
    render(<LocationDuration location={''} dateFrom={''} dateTo={''} />);

    expect(screen.getByText(/•/)).toBeInTheDocument();
  });

  it('applies correct styling', () => {
    render(<LocationDuration location={'Test Location'} dateFrom={'2020'} dateTo={'2021'} />);

    const element = screen.getByText('Test Location • 2020-2021');
    expect(element).toHaveClass('chakra-text');
  });
});
