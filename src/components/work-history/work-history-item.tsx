import { VStack } from '@chakra-ui/react';
import type { Maybe, WorkHistoryFragment } from '@/graphql/generated/graphql';
import { EmployerLink } from './employer-link';
import { LocationDuration } from './location-duration';
import { Responsibilities } from './responsibilities';
import { RoleTitle } from './role-title';
import { SkillSummary } from './skill-summary';

type WorkHistoryItemProps = {
  item: Maybe<WorkHistoryFragment>;
};

export const WorkHistoryItem = ({
  item,
}: WorkHistoryItemProps): React.JSX.Element => (
  <VStack as={'section'} alignItems={'start'} gap={1}>
    <EmployerLink item={item} />
    <RoleTitle roleTitle={item?.roleTitle} />
    <LocationDuration
      location={item?.location}
      dateFrom={item?.dateFrom}
      dateTo={item?.dateTo}
    />
    <Responsibilities items={item?.responsibilitiesCollection?.items} />
    <SkillSummary skillSummary={item?.skillSummary} />
  </VStack>
);
