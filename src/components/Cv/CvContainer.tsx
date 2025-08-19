import { useCallback, useEffect, useState } from 'react';
import type { CvFragment, WorkHistoryFragment } from 'src/graphql-types';
import {
  useGetCvQuery,
  useGetMoreWorkHistoryLazyQuery,
} from 'src/graphql-types';
import { CvComponent } from './CvComponent';

export function CvContainer(): JSX.Element {
  const initialLimit = 5;
  const { data, loading } = useGetCvQuery({
    variables: { workHistoryLimit: initialLimit },
  });
  const [cvFragment, setCvFragment] = useState<CvFragment | undefined>();
  const [allWorkHistoryItems, setAllWorkHistoryItems] = useState<
    WorkHistoryFragment[]
  >([]);
  const [totalWorkHistoryItems, setTotalWorkHistoryItems] = useState(0);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const [getMoreWorkHistory] = useGetMoreWorkHistoryLazyQuery();

  useEffect(() => {
    if (!data?.cvCollection || data.cvCollection.items.length < 1) {
      return;
    }
    const cv = data.cvCollection.items[0];
    if (!cv) {
      return;
    }
    setCvFragment(cv);

    // Set initial work history items, filtering out undefined items
    const workHistoryItems = (cv.workHistoryCollection?.items || []).filter(
      (item): item is WorkHistoryFragment =>
        item !== null && item !== undefined,
    );
    setAllWorkHistoryItems(workHistoryItems);
    setTotalWorkHistoryItems(cv.workHistoryCollection?.total || 0);
  }, [data?.cvCollection]);

  const fetchMoreWorkHistory = useCallback(async () => {
    if (!cvFragment || isLoadingMore) {
      return;
    }

    setIsLoadingMore(true);
    try {
      const currentCount = allWorkHistoryItems.length;
      const result = await getMoreWorkHistory({
        variables: {
          cvName: 'Matt Calthrop',
          limit: initialLimit,
          skip: currentCount,
        },
      });

      if (result.data?.cvCollection?.items?.[0]?.workHistoryCollection?.items) {
        const newItems =
          result.data.cvCollection.items[0].workHistoryCollection.items.filter(
            (item): item is WorkHistoryFragment =>
              item !== null && item !== undefined,
          );
        setAllWorkHistoryItems((prev) => [...prev, ...newItems]);
      }
    } catch (error) {
      console.error('Error fetching more work history:', error);
    } finally {
      setIsLoadingMore(false);
    }
  }, [
    cvFragment,
    allWorkHistoryItems.length,
    isLoadingMore,
    getMoreWorkHistory,
    initialLimit,
  ]);

  const hasMoreWorkHistory = allWorkHistoryItems.length < totalWorkHistoryItems;

  if (loading || cvFragment === undefined) {
    return <>Loading...</>;
  }

  return (
    <CvComponent
      cvFragment={cvFragment}
      workHistoryItems={allWorkHistoryItems}
      onFetchMoreWorkHistory={fetchMoreWorkHistory}
      hasMoreWorkHistory={hasMoreWorkHistory}
      isLoadingMoreWorkHistory={isLoadingMore}
    />
  );
}
