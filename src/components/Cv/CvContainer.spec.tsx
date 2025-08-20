import { render, screen, waitFor } from 'src/testUtils';
import { useGetCvQuery } from 'src/graphql-types';
import { CvContainer } from './CvContainer';
import { mockCvData } from 'src/mocks/graphql';
import { vi } from 'vitest';

vi.mock('src/graphql-types', async () => {
  const actual = await vi.importActual('src/graphql-types');
  return {
    ...actual,
    useGetCvQuery: vi.fn(),
  };
});

const mockUseGetCvQuery = useGetCvQuery as ReturnType<typeof vi.fn>;

describe('CvContainer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('displays loading when data is undefined', () => {
    mockUseGetCvQuery.mockReturnValue({
      data: undefined,
    });

    render(<CvContainer />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  it('displays loading when cvCollection is empty', () => {
    mockUseGetCvQuery.mockReturnValue({
      data: { cvCollection: { items: [] } },
    });

    render(<CvContainer />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  it('renders CvComponent when data is available', async () => {
    mockUseGetCvQuery.mockReturnValue({
      data: mockCvData,
    });

    render(<CvContainer />);

    await waitFor(() => {
      expect(screen.getByText('CV: Matt Calthrop')).toBeInTheDocument();
    });
  });

  it('updates cvFragment when data changes', async () => {
    // First render with no data
    mockUseGetCvQuery.mockReturnValue({
      data: { cvCollection: { items: [] } },
    });

    const { rerender } = render(<CvContainer />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();

    // Update with real data
    mockUseGetCvQuery.mockReturnValue({
      data: mockCvData,
    });

    rerender(<CvContainer />);

    await waitFor(() => {
      expect(screen.getByText('CV: Matt Calthrop')).toBeInTheDocument();
    });
  });
});
