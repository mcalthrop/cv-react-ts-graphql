import type { CvFragment } from '@/graphql/generated/graphql';

export type PublicationDataProps = {
  sys: CvFragment['sys'];
};

export const PublicationData = ({
  sys: { publishedAt, publishedVersion },
}: PublicationDataProps): React.JSX.Element => (
  <span
    data-published-at={publishedAt}
    data-published-version={publishedVersion}
  />
);
