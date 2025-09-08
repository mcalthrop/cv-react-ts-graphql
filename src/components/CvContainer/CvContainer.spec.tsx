import { render, screen } from '@/testUtils';
import { CvContainer } from './CvContainer';
import { fetchCvData } from './fetchCvData';
import { mockCvData } from '@/mocks/graphql';

jest.mock('./fetchCvData', () => ({
  fetchCvData: jest.fn(),
}));

describe('CvContainer', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders CvComponent when fetchCvData returns data', async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    jest.mocked(fetchCvData).mockResolvedValue(mockCvData.cvCollection?.items[0]!);

    render(await CvContainer());

    expect(screen.getByRole('heading', { name: 'On the web', level: 2 })).toBeInTheDocument();
  });

  it('displays error when fetchCvData throws "No CVs found"', async () => {
    jest.mocked(fetchCvData).mockRejectedValue(new Error('No CVs found'));

    await expect(async () => {
      render(await CvContainer());
    }).rejects.toThrow('No CVs found');
  });

  it('displays error when fetchCvData throws "Empty CV data"', async () => {
    jest.mocked(fetchCvData).mockRejectedValue(new Error('Empty CV data'));

    await expect(async () => {
      render(await CvContainer());
    }).rejects.toThrow('Empty CV data');
  });

  it('displays error when fetchCvData throws any other error', async () => {
    jest.mocked(fetchCvData).mockRejectedValue(new Error('Server error'));

    await expect(async () => {
      render(await CvContainer());
    }).rejects.toThrow('Server error');
  });
});
