import { Container, VStack } from '@chakra-ui/react';
import { Suspense } from 'react';
import { CvContainer } from '@/components/cv-container';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Loading } from '@/components/loading';
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
