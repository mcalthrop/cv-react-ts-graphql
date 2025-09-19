import { Text } from '@chakra-ui/react';
import type { Maybe } from '@/graphql/generated/graphql';

type RoleTitleProps = {
  roleTitle?: Maybe<string>;
};

export const RoleTitle = ({ roleTitle }: RoleTitleProps): React.JSX.Element => (
  <Text fontSize={'sm'} fontWeight={'semibold'}>
    {roleTitle}
  </Text>
);
