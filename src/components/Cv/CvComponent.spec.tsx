import { render, screen } from 'src/testUtils';
import { CvComponent } from './CvComponent';

describe('CvComponent', () => {
  it('should render CV text', () => {
    render(<CvComponent cvFragment={{}} />);
    const textElement = screen.getByText(/CV: Matt Calthrop/);
    expect(textElement).toBeInTheDocument();
  });
});
