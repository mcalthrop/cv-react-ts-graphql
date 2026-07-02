import { Text } from '@chakra-ui/react';

type LocationDurationProps = {
  location?: string | null;
  dateFrom?: string | null;
  dateTo?: string | null;
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
