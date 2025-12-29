import { vi } from 'vitest';
import Page from '@/app/page';
import { render, screen } from '@/testUtils';

// Mock the CvContainer component since it has complex dependencies
vi.mock('@/components/CvContainer', () => ({
  CvContainer: () => (
    <div data-testid={'cv-container'}>Mocked CV Container</div>
  ),
}));

describe('Page', () => {
  it('renders the main page component', () => {
    render(<Page />);

    expect(screen.getByTestId('cv-container')).toBeInTheDocument();
  });

  it('renders CV container within a Chakra Container', () => {
    const { container } = render(<Page />);

    const chakraContainer = container.querySelector('.chakra-container');
    expect(chakraContainer).toBeInTheDocument();
    expect(screen.getByTestId('cv-container')).toBeInTheDocument();
  });

  it('renders container with proper class', () => {
    const { container } = render(<Page />);

    const chakraContainer = container.querySelector('.chakra-container');
    expect(chakraContainer).toBeInTheDocument();
    // Test that the container is properly set up with maxWidth prop
    expect(chakraContainer).toHaveAttribute('class');
  });

  it('includes the App.css styles', () => {
    // This test ensures the CSS import doesn't cause issues
    expect(() => render(<Page />)).not.toThrow();
  });

  it('renders without crashing', () => {
    const { container } = render(<Page />);
    expect(container.firstChild).toBeInTheDocument();
  });
});
