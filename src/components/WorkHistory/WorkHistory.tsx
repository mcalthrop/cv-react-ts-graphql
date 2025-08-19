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
        {hasMore && onFetchMore && (
          <Button
            onClick={onFetchMore}
            isLoading={isFetchingMore}
            loadingText="Loading more..."
            variant="outline"
            size="sm"
            alignSelf="flex-start"
            marginTop={2}
          >
            Fetch more
          </Button>
        )}
      </Flex>
    </>
  );
}
