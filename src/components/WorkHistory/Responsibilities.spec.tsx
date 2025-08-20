import { render, screen } from 'src/testUtils';
import { Responsibilities } from './Responsibilities';
import type { ParagraphFragment } from 'src/graphql-types';

const mockItems: ParagraphFragment[] = [
  {
    __typename: 'Paragraph',
    para: 'Led development of React applications using TypeScript',
  },
  {
    __typename: 'Paragraph',
    para: 'Mentored junior developers and conducted code reviews',
  },
  {
    __typename: 'Paragraph',
    para: 'Collaborated with product team on feature requirements',
  },
];

describe('Responsibilities', () => {
  it('renders all responsibility items', () => {
    render(<Responsibilities items={mockItems} />);

    expect(screen.getByText('Led development of React applications using TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Mentored junior developers and conducted code reviews')).toBeInTheDocument();
    expect(screen.getByText('Collaborated with product team on feature requirements')).toBeInTheDocument();
  });

  it('renders with no items', () => {
    render(<Responsibilities items={[]} />);

    expect(screen.queryByText(/development/)).not.toBeInTheDocument();
  });

  it('renders with undefined items', () => {
    render(<Responsibilities items={undefined} />);

    expect(screen.queryByText(/development/)).not.toBeInTheDocument();
  });

  it('filters out null items', () => {
    const itemsWithNull = [
      {
        __typename: 'Paragraph' as const,
        para: 'Valid responsibility',
      },
      undefined,
      {
        __typename: 'Paragraph' as const,
        para: 'Another valid responsibility',
      },
    ];

    render(<Responsibilities items={itemsWithNull} />);

    expect(screen.getByText('Valid responsibility')).toBeInTheDocument();
    expect(screen.getByText('Another valid responsibility')).toBeInTheDocument();
  });

  it('applies correct text styling', () => {
    render(<Responsibilities items={mockItems} />);

    const firstItem = screen.getByText('Led development of React applications using TypeScript');
    expect(firstItem).toHaveClass('chakra-text');
  });

  it('handles single responsibility item', () => {
    const singleItem = [mockItems[0]];
    render(<Responsibilities items={singleItem} />);

    expect(screen.getByText('Led development of React applications using TypeScript')).toBeInTheDocument();
    expect(screen.queryByText('Mentored junior developers')).not.toBeInTheDocument();
  });

  it('handles long responsibility text', () => {
    const longResponsibility = [
      {
        __typename: 'Paragraph' as const,
        para: 'This is a very long responsibility description that might wrap across multiple lines and should still be rendered correctly with proper styling and formatting maintained throughout the entire text block',
      },
    ];

    render(<Responsibilities items={longResponsibility} />);

    expect(screen.getByText(/This is a very long responsibility description/)).toBeInTheDocument();
  });
});
