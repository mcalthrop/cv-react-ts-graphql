import { render, screen } from 'src/testUtils';
import { CvComponent } from './CvComponent';

describe('CvComponent', () => {
  it('should render CV text', () => {
    const mockProps = {
      cvFragment: {},
      workHistoryItems: [],
      onFetchMoreWorkHistory: jest.fn(),
      hasMoreWorkHistory: false,
      isLoadingMoreWorkHistory: false,
    };

    render(<CvComponent {...mockProps} />);
    const textElement = screen.getByText(/CV: Matt Calthrop/);
    expect(textElement).toBeInTheDocument();
  });
});
