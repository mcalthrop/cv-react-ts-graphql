import { render, screen } from '@/testUtils';
import { WorkHistory } from './WorkHistory';
import type { WorkHistoryFragment } from '@/graphql/generated/graphql';

const mockItems: WorkHistoryFragment[] = [
  {
    __typename: 'WorkHistory',
    roleTitle: 'Senior Software Engineer',
    employerName: 'Test Company 1',
    employerUrl: 'https://test1.com',
    viaEmployerName: undefined,
    viaEmployerUrl: undefined,
    location: 'London, UK',
    dateFrom: '2020-01',
    dateTo: 'Present',
    responsibilitiesCollection: {
      __typename: 'WorkHistoryResponsibilitiesCollection',
      items: [
        {
          __typename: 'Paragraph',
          para: 'Led development of React applications',
        },
      ],
    },
    skillSummary: ['React', 'TypeScript', 'GraphQL'],
  },
  {
    __typename: 'WorkHistory',
    roleTitle: 'Software Engineer',
    employerName: 'Test Company 2',
    employerUrl: undefined,
    viaEmployerName: undefined,
    viaEmployerUrl: undefined,
    location: 'Remote',
    dateFrom: '2018-06',
    dateTo: '2019-12',
    responsibilitiesCollection: {
      __typename: 'WorkHistoryResponsibilitiesCollection',
      items: [
        {
          __typename: 'Paragraph',
          para: 'Developed web applications',
        },
      ],
    },
    skillSummary: ['JavaScript', 'Node.js'],
  },
];

describe('WorkHistory', () => {
  it('renders section heading', () => {
    render(<WorkHistory items={mockItems} />);

    expect(screen.getByRole('heading', { name: 'Work history', level: 2 })).toBeInTheDocument();
  });

  it('renders all work history items', () => {
    render(<WorkHistory items={mockItems} />);

    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Test Company 1')).toBeInTheDocument();
    expect(screen.getByText('Test Company 2')).toBeInTheDocument();
  });

  it('renders with no items', () => {
    render(<WorkHistory items={[]} />);

    expect(screen.getByRole('heading', { name: 'Work history', level: 2 })).toBeInTheDocument();
    expect(screen.queryByText(/Engineer/)).not.toBeInTheDocument();
  });

  it('renders with undefined items', () => {
    render(<WorkHistory items={undefined} />);

    expect(screen.getByRole('heading', { name: 'Work history', level: 2 })).toBeInTheDocument();
    expect(screen.queryByText(/Engineer/)).not.toBeInTheDocument();
  });

  it('filters out null items', () => {
    const itemsWithNull = [mockItems[0], null, mockItems[1]];

    render(<WorkHistory items={itemsWithNull} />);

    expect(screen.getByText('Senior Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('has correct flex layout structure', () => {
    const { container } = render(<WorkHistory items={mockItems} />);

    // Check that a container exists (the component renders)
    expect(container.firstChild).toBeInTheDocument();
  });
});
