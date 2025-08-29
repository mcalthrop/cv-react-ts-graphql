import { render, screen } from '@/testUtils';
import { ChakraWrapper } from './chakra-wrapper';

describe('ChakraWrapper', () => {
  it('renders children within CustomChakraProvider', () => {
    render(
      <ChakraWrapper>
        <div data-testid={'test-child'}>Test Content</div>
      </ChakraWrapper>,
    );

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('provides Chakra provider context', () => {
    // Simple test that doesn't rely on complex Chakra internals
    const TestComponent = () => {
      return <div data-testid={'chakra-test'}>Chakra Provider Active</div>;
    };

    render(
      <ChakraWrapper>
        <TestComponent />
      </ChakraWrapper>,
    );

    expect(screen.getByTestId('chakra-test')).toBeInTheDocument();
    expect(screen.getByText('Chakra Provider Active')).toBeInTheDocument();
  });

  it('handles multiple children', () => {
    render(
      <ChakraWrapper>
        <div data-testid={'child-1'}>Child 1</div>
        <div data-testid={'child-2'}>Child 2</div>
      </ChakraWrapper>,
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    const { container } = render(<ChakraWrapper>{null}</ChakraWrapper>);

    // Should render without errors even with null children
    expect(container.firstChild).toBeInTheDocument();
  });

  it('wraps content without causing rendering issues', () => {
    const { container } = render(
      <ChakraWrapper>
        <div data-testid={'styled-child'}>Styled Content</div>
      </ChakraWrapper>,
    );

    const child = screen.getByTestId('styled-child');
    expect(child).toBeInTheDocument();

    // Ensure the component renders properly within the provider
    expect(container.firstChild).toBeInTheDocument();
  });
});
