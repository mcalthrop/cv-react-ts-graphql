import { useEffect, useMemo, useState } from 'react';
import type { CvFragment, Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { useGetCvQuery } from 'src/graphql-types';
import { CvComponent } from './CvComponent';

const PAGE_SIZE = 5;

export function CvContainer(): JSX.Element {
  const [skip, setSkip] = useState(0);
  const { data, refetch } = useGetCvQuery({
    variables: { workHistorySkip: skip, workHistoryLimit: PAGE_SIZE },
    notifyOnNetworkStatusChange: true,
  });
  const [cvFragment, setCvFragment] = useState<CvFragment | undefined>();
  const [mergedWorkHistory, setMergedWorkHistory] = useState<
    Array<Maybe<WorkHistoryFragment>>
  >([]);
  const [pagination, setPagination] = useState<
    { total: number; skip: number; limit: number } | undefined
  >();

  useEffect(() => {
    if (!data?.cvCollection || data.cvCollection.items.length < 1) {
      return;
    }
    const cv = data.cvCollection.items[0];
    if (!cv) {
      return;
    }
    setCvFragment(cv);
    const wh = cv.workHistoryCollection;
    if (wh) {
      // pagination details returned by API for current page
      const total = wh.total ?? 0;
      const currentSkip = wh.skip ?? 0;
      const currentLimit = wh.limit ?? PAGE_SIZE;
      setPagination({ total, skip: currentSkip, limit: currentLimit });
      setMergedWorkHistory((prev) => {
        // If skip is 0, reset; else append new items
        const newItems = wh.items ?? [];
        if (skip === 0) {
          return newItems;
        }
        // append new page
        return [...prev, ...newItems];
      });
    }
  }, [data?.cvCollection, skip]);

  const workHistoryPagination = useMemo(() => pagination, [pagination]);

  const onWorkHistoryFetchMore = async (): Promise<void> => {
    if (!pagination) {
      return;
    }
    const nextSkip = (pagination.skip ?? 0) + (pagination.limit ?? PAGE_SIZE);
    setSkip(nextSkip);
    await refetch({ workHistorySkip: nextSkip, workHistoryLimit: PAGE_SIZE });
  };

  // Only show the loading state during the initial fetch before we have any data.
  if (cvFragment === undefined) {
    return <>Loading...</>;
  }

  const cvWithMerged: CvFragment = {
    ...cvFragment,
    workHistoryCollection: {
      ...cvFragment.workHistoryCollection,
      items: mergedWorkHistory,
    },
  } as CvFragment;

  return (
    <CvComponent
      cvFragment={cvWithMerged}
      workHistoryPagination={workHistoryPagination}
      onWorkHistoryFetchMore={onWorkHistoryFetchMore}
    />
  );
}
