import type { Maybe } from '@/graphql/generated/graphql';
import { Text } from '@chakra-ui/react';

type LocationDurationProps = {
  location?: Maybe<string>;
  dateFrom?: Maybe<string>;
  dateTo?: Maybe<string>;
};

export const LocationDuration = ({
  location,
  dateFrom,
  dateTo,
}: LocationDurationProps): React.JSX.Element => (
  <Text fontSize={'sm'}>
    {location} &bull; {dateFrom}-{dateTo}
  </Text>
);
