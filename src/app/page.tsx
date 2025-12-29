import { Container, VStack } from '@chakra-ui/react';
import { Suspense } from 'react';
import { CvContainer } from '@/components/CvContainer';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Loading } from '@/components/Loading';
import './page.css';

const Page = (): React.JSX.Element => (
  <Container maxWidth={'4xl'} padding={{ base: 2, sm: 6 }}>
    <VStack gap={8} alignItems={'start'}>
      <Header />
      <Suspense fallback={<Loading />}>
        <CvContainer />
      </Suspense>
      <Footer />
    </VStack>
  </Container>
);

export default Page;
