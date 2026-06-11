import { Text, VStack } from '@chakra-ui/react';
import type { ParagraphFragment } from '@/graphql/generated/graphql';

type ResponsibilitiesProps = {
  items?: Array<ParagraphFragment | null>;
};

export const Responsibilities = ({
  items,
}: ResponsibilitiesProps): React.JSX.Element => (
  <VStack alignItems={'start'} gap={0.5}>
    {items?.map((item, idx) => (
      <Text key={idx} fontSize={'sm'} letterSpacing={-0.5} lineHeight={'100%'}>
        {item?.para}
      </Text>
    ))}
  </VStack>
);
