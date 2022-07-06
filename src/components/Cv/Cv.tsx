import { useEffect } from 'react';
import { useGetCvQuery } from 'src/graphql-types';

export function Cv(): JSX.Element {
  const { data } = useGetCvQuery();

  useEffect(() => {
    if (!data?.cvCollection) {
      return;
    }
    console.log('*** Cv', {
      'data.cvCollection.items[0]': data.cvCollection.items[0],
    });
  }, [data]);

  return <>CV: Matt Calthrop</>;
}
