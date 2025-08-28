import { render, screen } from 'src/testUtils';
import { useApolloClient } from '@apollo/client';
import { ApolloWrapper } from './apollo-wrapper';

describe('ApolloWrapper', () => {
  it('renders children within ApolloProvider', () => {
    render(
      <ApolloWrapper>
        <div data-testid={'test-child'}>Test Content</div>
      </ApolloWrapper>,
    );

    expect(screen.getByTestId('test-child')).toBeInTheDocument();
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('provides Apollo Client context to children', () => {
    const TestComponent = () => {
      const client = useApolloClient();
      return <div data-testid={'apollo-client'}>{client ? 'Client Available' : 'No Client'}</div>;
    };

    render(
      <ApolloWrapper>
        <TestComponent />
      </ApolloWrapper>,
    );

    expect(screen.getByTestId('apollo-client')).toHaveTextContent('Client Available');
  });

  it('handles multiple children', () => {
    render(
      <ApolloWrapper>
        <div data-testid={'child-1'}>Child 1</div>
        <div data-testid={'child-2'}>Child 2</div>
      </ApolloWrapper>,
    );

    expect(screen.getByTestId('child-1')).toBeInTheDocument();
    expect(screen.getByTestId('child-2')).toBeInTheDocument();
  });

  it('handles empty children', () => {
    const { container } = render(<ApolloWrapper>{null}</ApolloWrapper>);

    // Should render without errors even with null children
    expect(container.firstChild).toBeInTheDocument();
  });
});
