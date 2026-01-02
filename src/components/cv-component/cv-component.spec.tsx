import type { CvFragment } from '@/graphql/generated/graphql';
import { render, screen } from '@/test-utils';
import { CvComponent } from './cv-component';

const mockCvFragment: CvFragment = {
  sys: {
    publishedAt: '2025-09-03T11:42:29.382Z',
    publishedVersion: 42,
  },
  image: { url: 'https://example.com/image.jpg' },
  overviewCollection: {
    items: [{ para: 'Overview paragraph 1' }],
  },
  onTheWebCollection: {
    items: [{ linkText: 'GitHub', url: 'https://github.com/test' }],
  },
  workHistoryCollection: {
    items: [
      {
        roleTitle: 'Software Engineer',
        employerName: 'Test Company',
        employerUrl: 'https://test.com',
        viaEmployerName: undefined,
        viaEmployerUrl: undefined,
        location: 'London',
        dateFrom: '2020-01',
        dateTo: 'Present',
        responsibilitiesCollection: {
          items: [{ para: 'Test responsibility' }],
        },
        skillSummary: ['React', 'TypeScript'],
      },
    ],
  },
  educationCollection: {
    items: [{ para: 'Test education' }],
  },
  interestsCollection: {
    items: [{ para: 'Test interest' }],
  },
};

describe('CvComponent', () => {
  it('should render all sections', () => {
    render(<CvComponent cvFragment={mockCvFragment} />);

    expect(screen.getByText('Overview paragraph 1')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'On the web', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Work history', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Education', level: 2 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Interests', level: 2 }),
    ).toBeInTheDocument();
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
