import { Container } from '@chakra-ui/react';
import { CvContainer } from '@/components/CvContainer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import './page.css';

const Page = (): React.JSX.Element => (
  <Container maxWidth={'4xl'}>
    <Header />
    <CvContainer />
    <Footer />
  </Container>
);

export default Page;
