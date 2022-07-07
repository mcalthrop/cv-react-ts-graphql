import { Text } from '@chakra-ui/react';

type RoleTitleProps = {
  roleTitle: string | undefined;
};

export function RoleTitle({ roleTitle }: RoleTitleProps): JSX.Element {
  return (
    <Text fontSize={'sm'} fontWeight={600}>
      {roleTitle}
    </Text>
  );
}
