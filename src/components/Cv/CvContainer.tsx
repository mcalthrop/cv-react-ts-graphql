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
  const workItems = useMemo(
    () => workPage?.items as Array<Maybe<WorkHistoryFragment>> | undefined,
    [workPage?.items],
  );
  const workTotal = workPage?.total ?? 0;
  const workLimit = workPage?.limit ?? PAGE_SIZE;
  const workHasMore = (workItems?.length ?? 0) < workTotal;

  const handleFetchMore = () => {
    if (!workHasMore) {
      return;
    }
    const nextSkip = workItems?.length ?? 0;
    setIsFetchingMore(true);
    fetchMore({
      variables: { workSkip: nextSkip, workLimit: workLimit },
      updateQuery: (prev: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) {
          return prev;
        }
        const prevCv = prev.cvCollection?.items?.[0];
        const nextCv = fetchMoreResult.cvCollection?.items?.[0];
        if (!prevCv || !nextCv) {
          return prev;
        }
        const mergedItems = [
          ...(prevCv.workHistoryPage?.items ?? []),
          ...(nextCv.workHistoryPage?.items ?? []),
        ];
        return {
          ...prev,
          cvCollection: {
            ...prev.cvCollection!,
            items: [
              {
                ...prevCv,
                workHistoryPage: {
                  ...nextCv.workHistoryPage!,
                  items: mergedItems,
                  skip: prevCv.workHistoryPage?.skip ?? 0,
                },
              },
            ],
          },
        };
      },
    }).finally(() => setIsFetchingMore(false));
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
      workItems={workItems}
      workHasMore={workHasMore}
      workOnFetchMore={handleFetchMore}
      workIsFetchingMore={isFetchingMore}
    />
  );
}
