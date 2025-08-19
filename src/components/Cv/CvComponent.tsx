import { Heading } from '@chakra-ui/react';
import type { CvFragment, Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { Education } from '../Education';
import { Footer } from '../Footer';
import { Interests } from '../Interests';
import { OnTheWeb } from '../OnTheWeb';
import { Overview } from '../Overview';
import { WorkHistory } from '../WorkHistory';

type CvComponentProps = {
  cvFragment: CvFragment;
  workItems?: Array<Maybe<WorkHistoryFragment>>;
  workHasMore?: boolean;
  onFetchMore?: () => void;
  isFetchingMore?: boolean;
};

export function CvComponent({
  cvFragment,
  workItems,
  workHasMore,
  onFetchMore,
  isFetchingMore,
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
        items={workItems || cvFragment.workHistoryCollection?.items}
        hasMore={workHasMore}
        onFetchMore={onFetchMore}
        isFetchingMore={isFetchingMore}
      />
      <Education items={cvFragment.educationCollection?.items} />
      <Interests items={cvFragment.interestsCollection?.items} />
      <Footer />
    </>
  );
}
