import type { ParagraphFragment } from '@/graphql/generated/graphql';
import { render, screen } from '@/testUtils';
import { Overview } from './Overview';

const mockItems: ParagraphFragment[] = [
  { para: 'First overview paragraph' },
  { para: 'Second overview paragraph' },
];

describe('Overview', () => {
  it('renders without image', () => {
    render(<Overview items={mockItems} />);

    expect(screen.getByText('First overview paragraph')).toBeInTheDocument();
    expect(screen.getByText('Second overview paragraph')).toBeInTheDocument();

    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('renders with image', () => {
    const imageUrl = 'https://example.com/profile.jpg';
    render(<Overview image={imageUrl} items={mockItems} />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', imageUrl);
  });

  it('renders with no items', () => {
    render(<Overview items={[]} />);

    expect(screen.queryByText(/paragraph/)).not.toBeInTheDocument();
  });

  it('renders with undefined items', () => {
    render(<Overview items={undefined} />);

    expect(screen.queryByText(/paragraph/)).not.toBeInTheDocument();
  });

  it('filters out null items', () => {
    const itemsWithNull = [
      { para: 'Valid paragraph' },
      null,
      { para: 'Another valid paragraph' },
    ];

    render(<Overview items={itemsWithNull} />);

    expect(screen.getByText('Valid paragraph')).toBeInTheDocument();
    expect(screen.getByText('Another valid paragraph')).toBeInTheDocument();
  });

  it('has correct layout structure', () => {
    render(
      <Overview image={'https://example.com/test.jpg'} items={mockItems} />,
    );

    const container = screen.getByRole('img').closest('.chakra-stack');
    expect(container).toBeInTheDocument();
    expect(container).toHaveStyle({ 'flex-direction': 'row' });
  });
});
