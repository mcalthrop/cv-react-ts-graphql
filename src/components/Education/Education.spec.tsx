import { render, screen } from 'src/testUtils';
import { Education } from './Education';
import type { ParagraphFragment } from 'src/graphql-types';

describe('Education', () => {
  const mockItems: ParagraphFragment[] = [
    {
      __typename: 'Paragraph',
      para: 'BSc Computer Science, University of Test',
    },
    {
      __typename: 'Paragraph',
      para: 'MSc Software Engineering, Test Institute',
    },
  ];

  it('renders section heading', () => {
    render(<Education items={mockItems} />);
    
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument();
  });

  it('renders all education items', () => {
    render(<Education items={mockItems} />);
    
    expect(screen.getByText('BSc Computer Science, University of Test')).toBeInTheDocument();
    expect(screen.getByText('MSc Software Engineering, Test Institute')).toBeInTheDocument();
  });

  it('renders with no items', () => {
    render(<Education items={[]} />);
    
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument();
    expect(screen.queryByText(/University/)).not.toBeInTheDocument();
  });

  it('renders with undefined items', () => {
    render(<Education items={undefined} />);
    
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument();
    expect(screen.queryByText(/University/)).not.toBeInTheDocument();
  });

  it('filters out null items', () => {
    const itemsWithNull = [
      {
        __typename: 'Paragraph' as const,
        para: 'Valid education entry',
      },
      undefined,
      {
        __typename: 'Paragraph' as const,
        para: 'Another valid education entry',
      },
    ];

    render(<Education items={itemsWithNull} />);
    
    expect(screen.getByText('Valid education entry')).toBeInTheDocument();
    expect(screen.getByText('Another valid education entry')).toBeInTheDocument();
  });

  it('applies correct text styling', () => {
    render(<Education items={mockItems} />);
    
    const firstParagraph = screen.getByText('BSc Computer Science, University of Test');
    expect(firstParagraph).toHaveClass('chakra-text');
  });
});