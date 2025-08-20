import { render, screen } from 'src/testUtils';
import { App } from './App';

describe('App', () => {
  it('renders the CV container within proper providers', () => {
    render(<App />);
    expect(screen.getByText(/Loading.../)).toBeInTheDocument();
  });

  it('applies the correct container max width', () => {
    const { container } = render(<App />);
    const containerDiv = container.querySelector('.chakra-container');
    expect(containerDiv).toBeInTheDocument();
  });
});
