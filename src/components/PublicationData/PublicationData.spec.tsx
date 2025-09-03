import { render } from '@/testUtils';
import type { CvFragment } from '@/graphql/generated/graphql';
import { PublicationData } from './PublicationData';

const mockSysData: CvFragment['sys'] = {
  publishedAt: '2023-10-15T14:30:00.000Z',
  publishedVersion: 42,
};

describe('PublicationData', () => {
  it('should render a span with data attributes', () => {
    const { container } = render(<PublicationData sys={mockSysData} />);

    const span = container.querySelector('span');
    expect(span).toBeInTheDocument();
    expect(span).toHaveAttribute('data-published-at', '2023-10-15T14:30:00.000Z');
    expect(span).toHaveAttribute('data-published-version', '42');
  });

  it('should handle both null values', () => {
    const mockSysWithNulls: CvFragment['sys'] = {
      publishedAt: null,
      publishedVersion: null,
    };

    const { container } = render(<PublicationData sys={mockSysWithNulls} />);

    const span = container.querySelector('span');
    expect(span).not.toHaveAttribute('data-published-at');
    expect(span).not.toHaveAttribute('data-published-version');
  });
});
