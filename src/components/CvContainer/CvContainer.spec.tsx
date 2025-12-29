import { vi } from 'vitest';
import { mockCvData } from '@/mocks/graphql';
import { render, screen } from '@/testUtils';
import { CvContainer } from './CvContainer';
import { fetchCvData } from './fetchCvData';

vi.mock('./fetchCvData', () => ({
  fetchCvData: vi.fn(),
}));

describe('CvContainer', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('renders CvComponent when fetchCvData returns data', async () => {
    vi.mocked(fetchCvData).mockResolvedValue(
      // biome-ignore lint/style/noNonNullAssertion: get around Contentful limitations
      // biome-ignore lint/suspicious/noNonNullAssertedOptionalChain: get around Contentful limitations
      mockCvData.cvCollection?.items[0]!,
    );

    render(await CvContainer());

    expect(
      screen.getByRole('heading', { name: 'On the web', level: 2 }),
    ).toBeInTheDocument();
  });

  it('displays error when fetchCvData throws "No CVs found"', async () => {
    vi.mocked(fetchCvData).mockRejectedValue(new Error('No CVs found'));

    await expect(async () => {
      render(await CvContainer());
    }).rejects.toThrow('No CVs found');
  });

  it('displays error when fetchCvData throws "Empty CV data"', async () => {
    vi.mocked(fetchCvData).mockRejectedValue(new Error('Empty CV data'));

    await expect(async () => {
      render(await CvContainer());
    }).rejects.toThrow('Empty CV data');
  });

  it('displays error when fetchCvData throws any other error', async () => {
    vi.mocked(fetchCvData).mockRejectedValue(new Error('Server error'));

    await expect(async () => {
      render(await CvContainer());
    }).rejects.toThrow('Server error');
  });
});
