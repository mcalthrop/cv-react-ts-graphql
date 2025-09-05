'use client';

import type { CvFragment } from '@/graphql/generated/graphql';
import { Text } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Section } from '@/components/Section';

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

  return (
    <Section>
      <Text fontSize={'xs'} color={'fg.subtle'}>
        v{publishedVersion} published on{' '}
        {publishedAt.replace('T', ' at ').replace('Z', '').slice(0, -4)} GMT
      </Text>
    </Section>
  );
};
