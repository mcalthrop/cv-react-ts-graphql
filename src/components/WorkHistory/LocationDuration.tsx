import { Text } from '@chakra-ui/react';

type LocationDurationProps = {
  location: string | undefined;
  dateFrom: string | undefined;
  dateTo: string | undefined;
};

export function LocationDuration({
  location,
  dateFrom,
  dateTo,
}: LocationDurationProps): JSX.Element {
  return (
    <Text fontSize={'sm'}>
      {location} &bull; {dateFrom}-{dateTo}
    </Text>
  );
}
