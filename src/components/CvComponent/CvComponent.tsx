'use client';

import type { CvFragment } from '@/graphql/generated/graphql';
import { Education } from '../Education';
import { Interests } from '../Interests';
import { OnTheWeb } from '../OnTheWeb';
import { Overview } from '../Overview';
import { WorkHistory } from '../WorkHistory';
import { PublicationData } from '../PublicationData';

export type CvComponentProps = {
  cvFragment: CvFragment;
};

export const CvComponent = ({
  cvFragment,
}: CvComponentProps): React.JSX.Element => (
  <>
    <PublicationData sys={cvFragment.sys} />
    <Overview
      image={cvFragment.image?.url}
      items={cvFragment.overviewCollection?.items}
    />
    <OnTheWeb items={cvFragment.onTheWebCollection?.items} />
    <WorkHistory items={cvFragment.workHistoryCollection?.items} />
    <Education items={cvFragment.educationCollection?.items} />
    <Interests items={cvFragment.interestsCollection?.items} />
  </>
);
