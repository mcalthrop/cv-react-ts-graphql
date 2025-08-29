import { ApolloProvider } from '@apollo/client/react';
import { CustomChakraProvider } from './components/chakra/provider';
import './App.css';
import { Container } from '@chakra-ui/react';
import { CvContainer } from './components/Cv';
import { createApolloClient } from './graphql';

const apolloClient = createApolloClient();

export const App = (): React.JSX.Element => (
  <ApolloProvider client={apolloClient}>
    <CustomChakraProvider>
      <Container maxWidth={'4xl'}>
        <CvContainer />
      </Container>
    </CustomChakraProvider>
  </ApolloProvider>
);
