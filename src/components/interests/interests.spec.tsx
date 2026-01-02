import type { ParagraphFragment } from '@/graphql/generated/graphql';
import { render, screen } from '@/test-utils';
import { Interests } from './interests';

const mockItems: ParagraphFragment[] = [
  { para: 'Photography and travel' },
  { para: 'Open source contributions' },
];

describe('Interests', () => {
  it('renders section heading', () => {
    render(<Interests items={mockItems} />);

    expect(
      screen.getByRole('heading', { name: 'Interests', level: 2 }),
    ).toBeInTheDocument();
  });

  it('renders all interest items', () => {
    render(<Interests items={mockItems} />);

    expect(screen.getByText('Photography and travel')).toBeInTheDocument();
    expect(screen.getByText('Open source contributions')).toBeInTheDocument();
  });

  it('renders with no items', () => {
    render(<Interests items={[]} />);

    expect(
      screen.getByRole('heading', { name: 'Interests', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Photography/)).not.toBeInTheDocument();
  });

  it('renders with undefined items', () => {
    render(<Interests items={undefined} />);

    expect(
      screen.getByRole('heading', { name: 'Interests', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.queryByText(/Photography/)).not.toBeInTheDocument();
  });

  it('filters out null items', () => {
    const itemsWithNull = [
      { para: 'Valid interest' },
      null,
      { para: 'Another valid interest' },
    ];

    render(<Interests items={itemsWithNull} />);

    expect(screen.getByText('Valid interest')).toBeInTheDocument();
    expect(screen.getByText('Another valid interest')).toBeInTheDocument();
  });

  it('applies correct text styling', () => {
    render(<Interests items={mockItems} />);

    const firstParagraph = screen.getByText('Photography and travel');
    expect(firstParagraph).toBeInTheDocument();
  });
});
