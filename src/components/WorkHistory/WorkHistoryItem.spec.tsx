import { render, screen } from '@/testUtils';
import { WorkHistoryItem } from './WorkHistoryItem';
import type { WorkHistoryFragment } from '@/graphql/generated/graphql';

const mockItem: WorkHistoryFragment = {
  roleTitle: 'Senior Software Engineer',
  employerName: 'Test Company',
  employerUrl: 'https://testcompany.com',
  viaEmployerName: 'Recruitment Agency',
  viaEmployerUrl: 'https://agency.com',
  location: 'London, UK',
  dateFrom: '2020-01',
  dateTo: 'Present',
  responsibilitiesCollection: {
    items: [
      {
        para: 'Led development of React applications',
      },
      {
        para: 'Mentored junior developers',
      },
    ],
  },
  skillSummary: ['React', 'TypeScript', 'GraphQL', 'Node.js'],
};

describe('WorkHistoryItem', () => {
  it('renders all sub-components with correct data', () => {
    render(<WorkHistoryItem item={mockItem} />);

    // Check role title
    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();

    // Check employer
    expect(screen.getByText('Test Company')).toBeInTheDocument();
    expect(screen.getByText('Recruitment Agency')).toBeInTheDocument();

    // Check location and duration
    expect(screen.getByText(/London, UK • 2020-01-Present/)).toBeInTheDocument();

    // Check responsibilities
    expect(screen.getByText('Led development of React applications')).toBeInTheDocument();
    expect(screen.getByText('Mentored junior developers')).toBeInTheDocument();

    // Check skills - using getAllByText since React appears in both responsibilities and skills
    const reactElements = screen.getAllByText(/React/);
    expect(reactElements.length).toBeGreaterThan(0);
    expect(screen.getByText(/TypeScript/)).toBeInTheDocument();
    expect(screen.getByText(/GraphQL/)).toBeInTheDocument();
    expect(screen.getByText(/Node\.js/)).toBeInTheDocument();
  });

  it('handles null item', () => {
    render(<WorkHistoryItem item={null} />);

    expect(screen.queryByText(/Engineer/)).not.toBeInTheDocument();
  });

  it('renders with minimal data', () => {
    const minimalItem: WorkHistoryFragment = {
      roleTitle: 'Developer',
      employerName: undefined,
      employerUrl: undefined,
      viaEmployerName: undefined,
      viaEmployerUrl: undefined,
      location: undefined,
      dateFrom: undefined,
      dateTo: undefined,
      responsibilitiesCollection: {
        items: [],
      },
      skillSummary: [],
    };

    render(<WorkHistoryItem item={minimalItem} />);

    expect(screen.getByText('Developer')).toBeInTheDocument();
  });

  it('renders employer links correctly', () => {
    render(<WorkHistoryItem item={mockItem} />);

    const companyLink = screen.getByRole('link', { name: 'Test Company' });
    expect(companyLink).toHaveAttribute('href', 'https://testcompany.com');
    expect(companyLink).toHaveAttribute('target', '_blank');

    const agencyLink = screen.getByRole('link', { name: 'Recruitment Agency' });
    expect(agencyLink).toHaveAttribute('href', 'https://agency.com');
    expect(agencyLink).toHaveAttribute('target', '_blank');
  });
});
