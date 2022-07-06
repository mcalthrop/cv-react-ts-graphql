import { ApolloProvider } from '@apollo/client';
import './App.css';
import { CvContainer } from './components/Cv';
import { createApolloClient } from './graphql';

const apolloClient = createApolloClient();

export function App(): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <CvContainer />
    </ApolloProvider>
  );
}
