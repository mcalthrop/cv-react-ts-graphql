import { render, screen } from '@/testUtils';
import { Loading } from './Loading';

describe('Loading', () => {
  it('renders the heading with correct text', () => {
    render(<Loading />);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });
});
