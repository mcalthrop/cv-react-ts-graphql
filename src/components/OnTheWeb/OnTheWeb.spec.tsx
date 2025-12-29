import type { OnTheWebFragment } from '@/graphql/generated/graphql';
import { render, screen } from '@/testUtils';
import { OnTheWeb } from './OnTheWeb';

const mockItems: OnTheWebFragment[] = [
  { linkText: 'GitHub', url: 'https://github.com/test' },
  { linkText: 'LinkedIn', url: 'https://linkedin.com/in/test' },
];

describe('OnTheWeb', () => {
  it('renders section heading', () => {
    render(<OnTheWeb items={mockItems} />);

    expect(
      screen.getByRole('heading', { name: 'On the web', level: 2 }),
    ).toBeInTheDocument();
  });

  it('renders links with correct attributes', () => {
    render(<OnTheWeb items={mockItems} />);

    const githubLink = screen.getByRole('link', { name: 'GitHub' });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/test');
    expect(githubLink).toHaveAttribute('target', '_blank');

    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' });
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://linkedin.com/in/test',
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  it('renders with no items', () => {
    render(<OnTheWeb items={[]} />);

    expect(
      screen.getByRole('heading', { name: 'On the web', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('renders with undefined items', () => {
    render(<OnTheWeb items={undefined} />);

    expect(
      screen.getByRole('heading', { name: 'On the web', level: 2 }),
    ).toBeInTheDocument();
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
  });

  it('filters out null items', () => {
    const itemsWithNull = [
      { linkText: 'Valid', url: 'https://valid.com' },
      null,
      { linkText: 'Another', url: 'https://another.com' },
    ];

    render(<OnTheWeb items={itemsWithNull} />);

    expect(screen.getByRole('link', { name: 'Valid' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Another' })).toBeInTheDocument();
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('has correct list structure', () => {
    render(<OnTheWeb items={mockItems} />);

    const list = screen.getByRole('list');
    expect(list).toBeInTheDocument();

    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(2);
  });
});
