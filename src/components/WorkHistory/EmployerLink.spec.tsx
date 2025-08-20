import { render, screen } from 'src/testUtils';
import { EmployerLink } from './EmployerLink';
import type { WorkHistoryFragment } from 'src/graphql-types';

describe('EmployerLink', () => {
  const createMockItem = (overrides: Partial<WorkHistoryFragment> = {}): WorkHistoryFragment => ({
    __typename: 'WorkHistory',
    roleTitle: 'Test Role',
    employerName: undefined,
    employerUrl: undefined,
    viaEmployerName: undefined,
    viaEmployerUrl: undefined,
    location: undefined,
    dateFrom: undefined,
    dateTo: undefined,
    responsibilitiesCollection: {
      __typename: 'WorkHistoryResponsibilitiesCollection',
      items: [],
    },
    skillSummary: [],
    ...overrides,
  });

  it('renders employer name without URL as plain text', () => {
    const item = createMockItem({
      employerName: 'Test Company',
      employerUrl: undefined,
    });

    render(<EmployerLink item={item} />);

    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders employer name with URL as link', () => {
    const item = createMockItem({
      employerName: 'Test Company',
      employerUrl: 'https://testcompany.com',
    });

    render(<EmployerLink item={item} />);

    const link = screen.getByRole('link', { name: 'Test Company' });
    expect(link).toHaveAttribute('href', 'https://testcompany.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders via employer name without URL as plain text', () => {
    const item = createMockItem({
      viaEmployerName: 'Recruitment Agency',
      viaEmployerUrl: undefined,
    });

    render(<EmployerLink item={item} />);

    expect(screen.getByText(/via Recruitment Agency/)).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders via employer name with URL as link', () => {
    const item = createMockItem({
      viaEmployerName: 'Recruitment Agency',
      viaEmployerUrl: 'https://agency.com',
    });

    render(<EmployerLink item={item} />);

    expect(screen.getByText(/via/)).toBeInTheDocument();
    const link = screen.getByRole('link', { name: 'Recruitment Agency' });
    expect(link).toHaveAttribute('href', 'https://agency.com');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('renders both employer and via employer with links', () => {
    const item = createMockItem({
      employerName: 'Test Company',
      employerUrl: 'https://testcompany.com',
      viaEmployerName: 'Recruitment Agency',
      viaEmployerUrl: 'https://agency.com',
    });

    render(<EmployerLink item={item} />);

    const companyLink = screen.getByRole('link', { name: 'Test Company' });
    expect(companyLink).toHaveAttribute('href', 'https://testcompany.com');

    const agencyLink = screen.getByRole('link', { name: 'Recruitment Agency' });
    expect(agencyLink).toHaveAttribute('href', 'https://agency.com');

    expect(screen.getByText(/via/)).toBeInTheDocument();
  });

  it('renders both employer and via employer without links', () => {
    const item = createMockItem({
      employerName: 'Test Company',
      employerUrl: undefined,
      viaEmployerName: 'Recruitment Agency',
      viaEmployerUrl: undefined,
    });

    render(<EmployerLink item={item} />);

    expect(screen.getByText(/Test Company/)).toBeInTheDocument();
    expect(screen.getByText(/via/)).toBeInTheDocument();
    expect(screen.getByText(/Recruitment Agency/)).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders only employer when via employer is not present', () => {
    const item = createMockItem({
      employerName: 'Test Company',
      employerUrl: 'https://testcompany.com',
    });

    render(<EmployerLink item={item} />);

    expect(screen.getByRole('link', { name: 'Test Company' })).toBeInTheDocument();
    expect(screen.queryByText(/via/)).not.toBeInTheDocument();
  });

  it('handles null item', () => {
    render(<EmployerLink item={undefined} />);

    expect(screen.queryByText(/Company/)).not.toBeInTheDocument();
  });

  it('handles undefined item', () => {
    render(<EmployerLink item={undefined} />);

    expect(screen.queryByText(/Company/)).not.toBeInTheDocument();
  });

  it('renders nothing when no employer data is available', () => {
    const item = createMockItem({
      employerName: undefined,
      viaEmployerName: undefined,
    });

    const { container } = render(<EmployerLink item={item} />);

    expect(container.firstChild).toBeInTheDocument();
  });
});
