import { Text } from '@chakra-ui/react';

export const Footer = (): React.JSX.Element => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <Text fontSize={'sm'} color={'fg.muted'}>
      Copyright &copy; Matt Calthrop 2018-{currentYear}
    </Text>
  );
};
