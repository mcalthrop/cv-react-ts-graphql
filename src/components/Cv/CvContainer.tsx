import { useEffect, useMemo, useState } from 'react';
import type { CvFragment, Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { useQuery } from '@apollo/client';
import { GET_CV_PAGINATED } from 'src/graphql/getCvPaginated.query';
import { CvComponent } from './CvComponent';

const PAGE_SIZE = 5;

export function CvContainer(): JSX.Element {
  const { data, fetchMore } = useQuery(GET_CV_PAGINATED, {
    variables: { workLimit: PAGE_SIZE, workSkip: 0 },
    notifyOnNetworkStatusChange: true,
  });
  const [cvFragment, setCvFragment] = useState<CvFragment | undefined>();
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const workPage = data?.cvCollection?.items?.[0]?.workHistoryPage;
  const initialItems = useMemo(
    () => workPage?.items as Array<Maybe<WorkHistoryFragment>> | undefined,
    [workPage?.items],
  );
  const initialTotal = workPage?.total ?? 0;
  const initialLimit = workPage?.limit ?? PAGE_SIZE;

  const [allWorkItems, setAllWorkItems] = useState<Array<Maybe<WorkHistoryFragment>>>([]);
  const [workTotal, setWorkTotal] = useState<number>(0);
  const [workLimit, setWorkLimit] = useState<number>(PAGE_SIZE);

  useEffect(() => {
    if (initialItems && initialItems.length > 0 && allWorkItems.length === 0) {
      setAllWorkItems(initialItems);
      setWorkTotal(initialTotal);
      setWorkLimit(initialLimit);
    }
  }, [initialItems, initialTotal, initialLimit, allWorkItems.length]);

  const workHasMore = allWorkItems.length < workTotal;

  const handleFetchMore = () => {
    if (!workHasMore) {
      return;
    }
    const nextSkip = allWorkItems.length;
    setIsFetchingMore(true);
    fetchMore({
      variables: { workSkip: nextSkip, workLimit },
    })
      .then((res: any) => {
        const nextItems: Array<Maybe<WorkHistoryFragment>> =
          res?.data?.cvCollection?.items?.[0]?.workHistoryPage?.items ?? [];
        if (nextItems.length > 0) {
          setAllWorkItems((prev) => [...prev, ...nextItems]);
        }
      })
      .finally(() => setIsFetchingMore(false));
  };

  useEffect(() => {
    if (!data?.cvCollection || data.cvCollection.items.length < 1) {
      return;
    }
    setCvFragment(data.cvCollection.items[0] as CvFragment);
  }, [data?.cvCollection]);

  if (cvFragment === undefined) {
    return <>Loading...</>;
  }

  return (
    <CvComponent
      cvFragment={cvFragment}
      workItems={allWorkItems}
      workHasMore={workHasMore}
      workOnFetchMore={handleFetchMore}
      workIsFetchingMore={isFetchingMore}
    />
  );
}
