import type { Maybe, WorkHistoryFragment } from '@/graphql/generated/graphql';
import { EmployerLink } from './EmployerLink';
import { LocationDuration } from './LocationDuration';
import { Responsibilities } from './Responsibilities';
import { RoleTitle } from './RoleTitle';
import { SkillSummary } from './SkillSummary';
import { VStack } from '@chakra-ui/react';

export type WorkHistoryItemProps = {
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
