import { Button, Flex } from '@chakra-ui/react';
import type { Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';
import { WorkHistoryItem } from './WorkHistoryItem';

type WorkHistoryProps = {
  items?: Array<Maybe<WorkHistoryFragment>>;
  onFetchMore?: () => void;
  hasMore?: boolean;
};

export function WorkHistory({
  items,
  onFetchMore,
  hasMore,
}: WorkHistoryProps): JSX.Element {
  return (
    <>
      <SectionHeading heading={'Work history'} />
      <Flex gap={2} direction={'column'}>
        {items?.map((item, idx) => (
          <WorkHistoryItem key={idx} item={item} />
        ))}
        {hasMore && (
          <Button onClick={onFetchMore} alignSelf={'start'}>
            Fetch more
          </Button>
        )}
      </Flex>
    </>
  );
}
