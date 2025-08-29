import { useEffect, useState } from 'react';
import type { CvFragment } from 'src/graphql-types';
import { useGetCvQuery } from 'src/graphql-types';
import { CvComponent } from './CvComponent';

export const CvContainer = (): React.JSX.Element => {
  const { data } = useGetCvQuery();
  const [cvFragment, setCvFragment] = useState<CvFragment | undefined>();

  useEffect(() => {
    if (!data?.cvCollection || data.cvCollection.items.length < 1) {
      return;
    }
    setCvFragment(data.cvCollection.items[0]);
  }, [data?.cvCollection]);

  if (cvFragment === undefined) {
    return <>Loading...</>;
  }

  return <CvComponent cvFragment={cvFragment} />;
};
