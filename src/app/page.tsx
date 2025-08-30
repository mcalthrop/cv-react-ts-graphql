import { Container } from '@chakra-ui/react';
import { CvContainer } from '@/components/Cv';
import './page.css';

const Page = (): React.JSX.Element => (
  <Container maxWidth={'4xl'}>
    <CvContainer />
  </Container>
);

export default Page;
