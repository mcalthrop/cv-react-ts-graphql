import { render, screen } from 'src/testUtils';
import { Cv } from './Cv';

describe('Cv', () => {
  it('should render CV text', () => {
    render(<Cv />);
    const textElement = screen.getByText(/CV: Matt Calthrop/);
    expect(textElement).toBeInTheDocument();
  });
});
