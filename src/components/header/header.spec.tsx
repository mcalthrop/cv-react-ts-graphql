import { render, screen } from '@/test-utils';
import { Header } from './header';

describe('Header', () => {
  it('renders the heading with correct text', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'CV: Matt Calthrop',
    );
  });
});
