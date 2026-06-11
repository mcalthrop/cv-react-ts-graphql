import { Text } from '@chakra-ui/react';

type RoleTitleProps = {
  roleTitle?: string | null;
};

export const RoleTitle = ({ roleTitle }: RoleTitleProps): React.JSX.Element => (
  <Text fontSize={'sm'} fontWeight={'semibold'}>
    {roleTitle}
  </Text>
);
