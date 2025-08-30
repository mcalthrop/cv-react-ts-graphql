import { render, screen } from '@/testUtils';
import { Header } from './Header';

describe('Header', () => {
  it('renders the heading with correct text', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('CV: Matt Calthrop');
  });
});
