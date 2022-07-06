import { Heading } from '@chakra-ui/react';
import type { CvFragment } from 'src/graphql-types';
import { Overview } from '../Overview';

type CvComponentProps = {
  cvFragment: CvFragment;
};

export function CvComponent({ cvFragment }: CvComponentProps): JSX.Element {
  console.log('*** CvComponent', { cvFragment });

  return (
    <>
      <Heading as={'h1'} size={'xl'} marginTop={3} marginBottom={3}>
        CV: Matt Calthrop
      </Heading>
      <Overview
        image={cvFragment.image?.url}
        items={cvFragment.overviewCollection?.items}
      />
    </>
  );
}
