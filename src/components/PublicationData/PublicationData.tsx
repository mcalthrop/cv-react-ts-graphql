'use client';

import type { CvFragment } from '@/graphql/generated/graphql';
import { useEffect } from 'react';

export type PublicationDataProps = {
  sys: CvFragment['sys'];
};

export const PublicationData = ({
  sys: { publishedAt, publishedVersion },
}: PublicationDataProps): React.JSX.Element => {
  useEffect(() => {
    document.body.setAttribute(
      'data-published-version',
      String(publishedVersion),
    );
    document.body.setAttribute('data-published-at', publishedAt);
  }, [publishedAt, publishedVersion]);

  return <></>;
};
