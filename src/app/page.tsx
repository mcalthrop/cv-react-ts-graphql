import { Container } from '@chakra-ui/react';
import { CvContainer } from '@/components/CvContainer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loading } from '@/components/Loading';
import { Suspense } from 'react';
import './page.css';

const Page = (): React.JSX.Element => (
  <Container maxWidth={'4xl'}>
    <Header />
    <Suspense fallback={<Loading />}>
      <CvContainer />
    </Suspense>
    <Footer />
  </Container>
);

export default Page;
