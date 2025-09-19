'use client';

import type { CvFragment } from '@/graphql/generated/graphql';
import { Education } from '@/components/Education';
import { Interests } from '@/components/Interests';
import { OnTheWeb } from '@/components/OnTheWeb';
import { Overview } from '@/components/Overview';
import { WorkHistory } from '@/components/WorkHistory';
import { PublicationData } from '@/components/PublicationData';
import { VStack } from '@chakra-ui/react';

type CvComponentProps = {
  cvFragment: CvFragment;
};

export const CvComponent = ({
  cvFragment,
}: CvComponentProps): React.JSX.Element => (
  <VStack gap={4} alignItems={'start'}>
    <Overview
      image={cvFragment.image?.url}
      items={cvFragment.overviewCollection?.items}
    />
    <OnTheWeb items={cvFragment.onTheWebCollection?.items} />
    <WorkHistory items={cvFragment.workHistoryCollection?.items} />
    <Education items={cvFragment.educationCollection?.items} />
    <Interests items={cvFragment.interestsCollection?.items} />
    <PublicationData sys={cvFragment.sys} />
  </VStack>
);
