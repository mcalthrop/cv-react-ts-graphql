import { Button, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import type { Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { useGetWorkHistoryQuery } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';
import { WorkHistoryItem } from './WorkHistoryItem';

type WorkHistoryProps = {
  items?: Array<Maybe<WorkHistoryFragment>>;
  total?: number;
};

export function WorkHistory({
  items: initialItems,
  total,
}: WorkHistoryProps): JSX.Element {
  const [allItems, setAllItems] = useState<Array<Maybe<WorkHistoryFragment>>>(
    initialItems || [],
  );
  const [hasMore, setHasMore] = useState(() => {
    if (total && initialItems) {
      return initialItems.length < total;
    }
    return true;
  });

  const { refetch: fetchMoreWorkHistory } = useGetWorkHistoryQuery({
    skip: true,
  });

  const handleFetchMore = async () => {
    try {
      const { data } = await fetchMoreWorkHistory({
        limit: 5,
        skip: allItems.length,
      });

      if (data?.workHistoryCollection?.items) {
        const newItems = data.workHistoryCollection.items;
        const updatedItems = [...allItems, ...newItems];
        setAllItems(updatedItems);

        const total = data.workHistoryCollection.total || 0;
        setHasMore(updatedItems.length < total);
      }
    } catch (error) {
      console.error('Error fetching more work history:', error);
    }
  };

  return (
    <>
      <SectionHeading heading={'Work history'} />
      <Flex gap={2} direction={'column'}>
        {allItems?.map((item, idx) => (
          <WorkHistoryItem key={idx} item={item} />
        ))}
        {hasMore && (
          <Button
            onClick={handleFetchMore}
            variant="outline"
            size="sm"
            alignSelf="flex-start"
            mt={4}
          >
            Fetch more
          </Button>
        )}
      </Flex>
    </>
  );
}
