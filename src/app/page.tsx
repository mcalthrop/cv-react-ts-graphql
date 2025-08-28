import { Container } from '@chakra-ui/react';
import { CvContainer } from '../components/Cv';
import '../App.css';

export default function Page(): JSX.Element {
  return (
    <Container maxWidth={'4xl'}>
      <CvContainer />
    </Container>
  );
}
