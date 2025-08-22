import { ApolloProvider } from '@apollo/client';
import { CustomChakraProvider } from './components/chakra/provider';
import './App.css';
import { Container } from '@chakra-ui/react';
import { CvContainer } from './components/Cv';
import { createApolloClient } from './graphql';

const apolloClient = createApolloClient();

export const App = (): JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <CustomChakraProvider enableSystem={false}>
      <Container maxWidth={'4xl'}>
        <CvContainer />
      </Container>
    </CustomChakraProvider>
  </ApolloProvider>
);
