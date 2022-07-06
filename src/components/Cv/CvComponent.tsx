import { Heading } from '@chakra-ui/react';
import type { CvFragment } from 'src/graphql-types';
import { Education } from '../Education';
import { Footer } from '../Footer';
import { Interests } from '../Interests';
import { OnTheWeb } from '../OnTheWeb';
import { Overview } from '../Overview';
import { WorkHistory } from '../WorkHistory';

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
      <OnTheWeb items={cvFragment.onTheWebCollection?.items} />
      <WorkHistory items={cvFragment.workHistoryCollection?.items} />
      <Education items={cvFragment.educationCollection?.items} />
      <Interests items={cvFragment.interestsCollection?.items} />
      <Footer />
    </>
  );
}
