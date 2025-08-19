import { useEffect, useMemo, useState } from 'react';
import type { CvFragment, Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { useGetCvQuery } from 'src/graphql-types';
import { CvComponent } from './CvComponent';

export function CvContainer(): JSX.Element {
  const PAGE_SIZE = 5;
  const [skip, setSkip] = useState(0);
  const { data, fetchMore } = useGetCvQuery({
    variables: { workHistoryLimit: PAGE_SIZE, workHistorySkip: skip },
    notifyOnNetworkStatusChange: true,
  });
  const [cvFragment, setCvFragment] = useState<CvFragment | undefined>();
  const [workHistoryItems, setWorkHistoryItems] = useState<
    Array<Maybe<WorkHistoryFragment>>
  >([]);
  const [totalWorkHistory, setTotalWorkHistory] = useState<number>(0);

  useEffect(() => {
    if (!data?.cvCollection?.items?.[0]) {
      return;
    }
    const cvCandidate = data.cvCollection.items[0];
    if (!cvCandidate) {
      return;
    }
    const cv = cvCandidate;
    setCvFragment(cv);
    const wh = cv.workHistoryCollection;
    if (wh) {
      setWorkHistoryItems((prev) => {
        const next = [...prev, ...(wh.items ?? [])];
        // de-dup by employerName+roleTitle+dateFrom (rough heuristic)
        const seen = new Set<string>();
        return next.filter((i) => {
          const key = `${i?.employerName ?? ''}|${i?.roleTitle ?? ''}|${i?.dateFrom ?? ''}`;
          if (seen.has(key)) {
            return false;
          }
          seen.add(key);
          return true;
        });
      });
      setTotalWorkHistory(wh.total ?? 0);
    }
  }, [data?.cvCollection]);

  const hasMore = useMemo(
    () => workHistoryItems.length < totalWorkHistory,
    [workHistoryItems.length, totalWorkHistory],
  );

  const handleFetchMore = async () => {
    const nextSkip = skip + PAGE_SIZE;
    await fetchMore({
      variables: { workHistoryLimit: PAGE_SIZE, workHistorySkip: nextSkip },
    });
    setSkip(nextSkip);
  };

  if (cvFragment === undefined) {
    return <>Loading...</>;
  }

  return (
    <CvComponent
      cvFragment={cvFragment}
      workHistoryItemsOverride={workHistoryItems}
      onFetchMoreWorkHistory={hasMore ? handleFetchMore : undefined}
      hasMoreWorkHistory={hasMore}
    />
  );
}
