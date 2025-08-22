import { Flex } from '@chakra-ui/react';
import type { Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';
import { WorkHistoryItem } from './WorkHistoryItem';

export type WorkHistoryProps = {
  items?: Array<Maybe<WorkHistoryFragment>>;
};

export const WorkHistory = ({ items }: WorkHistoryProps): JSX.Element => (
  <>
    <SectionHeading heading={'Work history'} />
    <Flex gap={2} direction={'column'}>
      {items?.map((item, idx) => (
        <WorkHistoryItem key={idx} item={item} />
      ))}
    </Flex>
  </>
);
