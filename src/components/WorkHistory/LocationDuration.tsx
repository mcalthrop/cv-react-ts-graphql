import { Text } from '@chakra-ui/react';

export type LocationDurationProps = {
  location: string | undefined;
  dateFrom: string | undefined;
  dateTo: string | undefined;
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
