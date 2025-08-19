import { Button, Flex } from '@chakra-ui/react';
import type { Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';
import { WorkHistoryItem } from './WorkHistoryItem';

type WorkHistoryProps = {
  items?: Array<Maybe<WorkHistoryFragment>>;
  hasMore?: boolean;
  onFetchMore?: () => void;
  isFetchingMore?: boolean;
};

export function WorkHistory({
  items,
  hasMore,
  onFetchMore,
  isFetchingMore,
}: WorkHistoryProps): JSX.Element {
  return (
    <>
      <SectionHeading heading={'Work history'} />
      <Flex gap={2} direction={'column'}>
        {items?.map((item, idx) => (
          <WorkHistoryItem key={idx} item={item} />
        ))}
      </Flex>
      {hasMore && (
        <Button
          mt={4}
          onClick={onFetchMore}
          isLoading={isFetchingMore}
          loadingText="Fetching more"
        >
          Fetch more
        </Button>
      )}
    </>
  );
}
