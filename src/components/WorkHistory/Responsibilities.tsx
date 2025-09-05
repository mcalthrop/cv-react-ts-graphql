import { VStack, Text } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from '@/graphql/generated/graphql';

export type ResponsibilitiesProps = {
  items?: Array<Maybe<ParagraphFragment>>;
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
