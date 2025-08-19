import { Button, Flex } from '@chakra-ui/react';
import type { WorkHistoryFragment } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';
import { WorkHistoryItem } from './WorkHistoryItem';

type WorkHistoryProps = {
  items: WorkHistoryFragment[];
  onFetchMore?: () => Promise<void>;
  hasMore?: boolean;
  isLoadingMore?: boolean;
};

export function WorkHistory({
  items,
  onFetchMore,
  hasMore = false,
  isLoadingMore = false,
}: WorkHistoryProps): JSX.Element {
  return (
    <>
      <SectionHeading heading={'Work history'} />
      <Flex gap={2} direction={'column'}>
        {items.map((item, idx) => (
          <WorkHistoryItem key={idx} item={item} />
        ))}
        {hasMore && (
          <Button
            onClick={onFetchMore}
            isLoading={isLoadingMore}
            loadingText={'Loading more...'}
            size={'md'}
            colorScheme={'blue'}
            variant={'outline'}
            alignSelf={'center'}
            mt={4}
          >
            Fetch more
          </Button>
        )}
      </Flex>
    </>
  );
}
