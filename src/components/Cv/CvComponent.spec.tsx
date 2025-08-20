import { render, screen } from 'src/testUtils';
import { CvComponent } from './CvComponent';
import type { CvFragment } from 'src/graphql-types';

const mockCvFragment: CvFragment = {
  __typename: 'Cv',
  image: {
    __typename: 'Asset',
    url: 'https://example.com/image.jpg',
  },
  overviewCollection: {
    __typename: 'CvOverviewCollection',
    items: [
      {
        __typename: 'Paragraph',
        para: 'Overview paragraph 1',
      },
    ],
  },
  onTheWebCollection: {
    __typename: 'CvOnTheWebCollection',
    items: [
      {
        __typename: 'OnTheWeb',
        linkText: 'GitHub',
        url: 'https://github.com/test',
      },
    ],
  },
  workHistoryCollection: {
    __typename: 'CvWorkHistoryCollection',
    items: [
      {
        __typename: 'WorkHistory',
        roleTitle: 'Software Engineer',
        employerName: 'Test Company',
        employerUrl: 'https://test.com',
        viaEmployerName: undefined,
        viaEmployerUrl: undefined,
        location: 'London',
        dateFrom: '2020-01',
        dateTo: 'Present',
        responsibilitiesCollection: {
          __typename: 'WorkHistoryResponsibilitiesCollection',
          items: [
            {
              __typename: 'Paragraph',
              para: 'Test responsibility',
            },
          ],
        },
        skillSummary: ['React', 'TypeScript'],
      },
    ],
  },
  educationCollection: {
    __typename: 'CvEducationCollection',
    items: [
      {
        __typename: 'Paragraph',
        para: 'Test education',
      },
    ],
  },
  interestsCollection: {
    __typename: 'CvInterestsCollection',
    items: [
      {
        __typename: 'Paragraph',
        para: 'Test interest',
      },
    ],
  },
};

describe('CvComponent', () => {
  it('should render CV heading', () => {
    render(<CvComponent cvFragment={mockCvFragment} />);
    expect(screen.getByRole('heading', { name: /CV: Matt Calthrop/ })).toBeInTheDocument();
  });

  it('should render all sections', () => {
    render(<CvComponent cvFragment={mockCvFragment} />);

    expect(screen.getByText('Overview paragraph 1')).toBeInTheDocument();
    expect(screen.getByText('On the web')).toBeInTheDocument();
    expect(screen.getByText('Work history')).toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Interests')).toBeInTheDocument();
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument();
  });

  it('should render with minimal cvFragment', () => {
    const minimalFragment = { __typename: 'Cv' as const };
    render(<CvComponent cvFragment={minimalFragment} />);

    expect(screen.getByRole('heading', { name: /CV: Matt Calthrop/ })).toBeInTheDocument();
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument();
  });

  it('should pass correct props to child components', () => {
    render(<CvComponent cvFragment={mockCvFragment} />);

    // Check that image URL is passed to Overview
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');

    // Check that work history items are rendered
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Test Company')).toBeInTheDocument();
  });
});
