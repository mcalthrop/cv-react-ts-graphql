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
  workHistoryPagination?: { total: number; skip: number; limit: number };
  onWorkHistoryFetchMore?: () => void;
};

export function CvComponent({
  cvFragment,
  workHistoryPagination,
  onWorkHistoryFetchMore,
}: CvComponentProps): JSX.Element {
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
      <WorkHistory
        items={cvFragment.workHistoryCollection?.items}
        pagination={workHistoryPagination}
        onFetchMore={onWorkHistoryFetchMore}
      />
      <Education items={cvFragment.educationCollection?.items} />
      <Interests items={cvFragment.interestsCollection?.items} />
      <Footer />
    </>
  );
}
