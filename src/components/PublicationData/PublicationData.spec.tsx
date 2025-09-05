import { render, screen } from '@/testUtils';
import { PublicationData } from './PublicationData';
import type { PublicationDataProps } from './PublicationData';

const mockSys: PublicationDataProps['sys'] = {
  publishedAt: '2023-12-25T10:30:00.314Z',
  publishedVersion: 42,
};

describe('PublicationData', () => {
  it('renders publication version and date correctly', () => {
    render(<PublicationData sys={mockSys} />);

    expect(screen.getByText('v42 published on 2023-12-25 at 10:30:00')).toBeInTheDocument();
  });

  it('sets data attributes on document body', () => {
    render(<PublicationData sys={mockSys} />);

    expect(document.body).toHaveAttribute('data-published-version', '42');
    expect(document.body).toHaveAttribute('data-published-at', '2023-12-25T10:30:00.314Z');
  });
});
