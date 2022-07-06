import { ApolloProvider } from '@apollo/client';
import { ChakraProvider, Container } from '@chakra-ui/react';
import './App.css';
import { chakraTheme } from './chakra';
import { CvContainer } from './components/Cv';
import { createApolloClient } from './graphql';

const apolloClient = createApolloClient();

export function App(): JSX.Element {
  return (
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={chakraTheme}>
        <Container maxWidth={'4xl'}>
          <CvContainer />
        </Container>
      </ChakraProvider>
    </ApolloProvider>
  );
}
