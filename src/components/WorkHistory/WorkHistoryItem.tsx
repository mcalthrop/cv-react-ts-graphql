import { Box } from '@chakra-ui/react';
import type { Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { EmployerLink } from './EmployerLink';
import { LocationDuration } from './LocationDuration';
import { Responsibilities } from './Responsibilities';
import { RoleTitle } from './RoleTitle';
import { SkillSummary } from './SkillSummary';

type WorkHistoryItemProps = {
  item: Maybe<WorkHistoryFragment>;
};

export function WorkHistoryItem({ item }: WorkHistoryItemProps): JSX.Element {
  return (
    <Box marginBottom={2}>
      <EmployerLink item={item} />
      <RoleTitle roleTitle={item?.roleTitle} />
      <LocationDuration
        location={item?.location}
        dateFrom={item?.dateFrom}
        dateTo={item?.dateTo}
      />
      <Responsibilities items={item?.responsibilitiesCollection?.items} />
      <SkillSummary skillSummary={item?.skillSummary} />
    </Box>
  );
}
