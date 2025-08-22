import { Text } from '@chakra-ui/react';

export type RoleTitleProps = {
  roleTitle: string | undefined;
};

export const RoleTitle = ({ roleTitle }: RoleTitleProps): JSX.Element => (
  <Text fontSize={'sm'} fontWeight={600}>
    {roleTitle}
  </Text>
);
