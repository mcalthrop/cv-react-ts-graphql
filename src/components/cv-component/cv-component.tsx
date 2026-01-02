'use client';

import { VStack } from '@chakra-ui/react';
import { Education } from '@/components/education';
import { Interests } from '@/components/interests';
import { OnTheWeb } from '@/components/on-the-web';
import { Overview } from '@/components/overview';
import { PublicationData } from '@/components/publication-data';
import { WorkHistory } from '@/components/work-history';
import type { CvFragment } from '@/graphql/generated/graphql';

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
