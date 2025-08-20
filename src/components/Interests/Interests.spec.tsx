import { render, screen } from 'src/testUtils';
import { Interests } from './Interests';
import type { ParagraphFragment } from 'src/graphql-types';

describe('Interests', () => {
  const mockItems: ParagraphFragment[] = [
    {
      __typename: 'Paragraph',
      para: 'Photography and travel',
    },
    {
      __typename: 'Paragraph',
      para: 'Open source contributions',
    },
  ];

  it('renders section heading', () => {
    render(<Interests items={mockItems} />);
    
    expect(screen.getByRole('heading', { name: 'Interests' })).toBeInTheDocument();
  });

  it('renders all interest items', () => {
    render(<Interests items={mockItems} />);
    
    expect(screen.getByText('Photography and travel')).toBeInTheDocument();
    expect(screen.getByText('Open source contributions')).toBeInTheDocument();
  });

  it('renders with no items', () => {
    render(<Interests items={[]} />);
    
    expect(screen.getByRole('heading', { name: 'Interests' })).toBeInTheDocument();
    expect(screen.queryByText(/Photography/)).not.toBeInTheDocument();
  });

  it('renders with undefined items', () => {
    render(<Interests items={undefined} />);
    
    expect(screen.getByRole('heading', { name: 'Interests' })).toBeInTheDocument();
    expect(screen.queryByText(/Photography/)).not.toBeInTheDocument();
  });

  it('filters out null items', () => {
    const itemsWithNull = [
      {
        __typename: 'Paragraph' as const,
        para: 'Valid interest',
      },
      undefined,
      {
        __typename: 'Paragraph' as const,
        para: 'Another valid interest',
      },
    ];

    render(<Interests items={itemsWithNull} />);
    
    expect(screen.getByText('Valid interest')).toBeInTheDocument();
    expect(screen.getByText('Another valid interest')).toBeInTheDocument();
  });

  it('applies correct text styling', () => {
    render(<Interests items={mockItems} />);
    
    const firstParagraph = screen.getByText('Photography and travel');
    expect(firstParagraph).toHaveClass('chakra-text');
  });
});