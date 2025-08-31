import { render, screen } from '@/testUtils';
import { Responsibilities } from './Responsibilities';
import type { ParagraphFragment } from '@/graphql/generated/graphql';

const mockItems: ParagraphFragment[] = [
  { para: 'Led development of React applications using TypeScript' },
  { para: 'Mentored junior developers and conducted code reviews' },
  { para: 'Collaborated with product team on feature requirements' },
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
    const itemsWithNull = [{ para: 'Valid responsibility' }, null, { para: 'Another valid responsibility' }];

    render(<Responsibilities items={itemsWithNull} />);

    expect(screen.getByText('Valid responsibility')).toBeInTheDocument();
    expect(screen.getByText('Another valid responsibility')).toBeInTheDocument();
  });

  it('applies correct text styling', () => {
    render(<Responsibilities items={mockItems} />);

    const firstItem = screen.getByText('Led development of React applications using TypeScript');
    expect(firstItem).toBeInTheDocument();
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
        para: 'This is a very long responsibility description that might wrap across multiple lines and should still be rendered correctly with proper styling and formatting maintained throughout the entire text block',
      },
    ];

    render(<Responsibilities items={longResponsibility} />);

    expect(screen.getByText(/This is a very long responsibility description/)).toBeInTheDocument();
  });
});
