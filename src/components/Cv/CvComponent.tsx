import { Heading } from '@chakra-ui/react';
import type { CvFragment, WorkHistoryFragment } from 'src/graphql-types';
import { Education } from '../Education';
import { Footer } from '../Footer';
import { Interests } from '../Interests';
import { OnTheWeb } from '../OnTheWeb';
import { Overview } from '../Overview';
import { WorkHistory } from '../WorkHistory';

type CvComponentProps = {
  cvFragment: CvFragment;
  workHistoryItems: WorkHistoryFragment[];
  onFetchMoreWorkHistory: () => Promise<void>;
  hasMoreWorkHistory: boolean;
  isLoadingMoreWorkHistory: boolean;
};

export function CvComponent({
  cvFragment,
  workHistoryItems,
  onFetchMoreWorkHistory,
  hasMoreWorkHistory,
  isLoadingMoreWorkHistory,
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
        items={workHistoryItems}
        onFetchMore={onFetchMoreWorkHistory}
        hasMore={hasMoreWorkHistory}
        isLoadingMore={isLoadingMoreWorkHistory}
      />
      <Education items={cvFragment.educationCollection?.items} />
      <Interests items={cvFragment.interestsCollection?.items} />
      <Footer />
    </>
  );
}
