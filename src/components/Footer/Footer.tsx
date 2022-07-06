import { Text } from '@chakra-ui/react';

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export function Footer(): JSX.Element {
  return (
    <Text marginTop={10} marginBottom={6} fontSize={'xs'} color={'gray.400'}>
      Copyright &copy; Matt Calthrop 2018-{currentYear}
    </Text>
  );
}
