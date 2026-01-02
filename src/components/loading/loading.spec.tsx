import { render, screen } from '@/test-utils';
import { Loading } from './loading';

describe('Loading', () => {
  it('renders the heading with correct text', () => {
    render(<Loading />);

    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
  });
});
