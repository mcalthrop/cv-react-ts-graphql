import { Button, Flex } from '@chakra-ui/react';
import type {
  CvWorkHistoryCollection,
  Maybe,
  WorkHistoryFragment,
} from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';
import { WorkHistoryItem } from './WorkHistoryItem';

type WorkHistoryProps = {
  items?: Array<Maybe<WorkHistoryFragment>>;
  pagination?: Pick<CvWorkHistoryCollection, 'total' | 'skip' | 'limit'>;
  onFetchMore?: () => void;
};

export function WorkHistory({
  items,
  pagination,
  onFetchMore,
}: WorkHistoryProps): JSX.Element {
  const hasMore =
    pagination !== undefined &&
    typeof pagination.total === 'number' &&
    typeof pagination.skip === 'number' &&
    typeof pagination.limit === 'number' &&
    pagination.skip + pagination.limit < pagination.total;

  return (
    <>
      <SectionHeading heading={'Work history'} />
      <Flex gap={2} direction={'column'}>
        {items?.map((item, idx) => (
          <WorkHistoryItem key={idx} item={item} />
        ))}
        {hasMore && (
          <Button
            onClick={onFetchMore}
            alignSelf={'flex-start'}
            variant={'outline'}
            type={'button'}
          >
            Fetch more
          </Button>
        )}
      </Flex>
    </>
  );
}
