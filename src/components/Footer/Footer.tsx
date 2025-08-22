import { Text } from '@chakra-ui/react';

export const Footer = (): JSX.Element => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Text marginTop={10} marginBottom={6} fontSize={'xs'} color={'gray.400'}>
      Copyright &copy; Matt Calthrop 2018-{currentYear}
    </Text>
  );
};
