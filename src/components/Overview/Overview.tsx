import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from '@/graphql-types';

export type OverviewProps = {
  image?: string;
  items?: Array<Maybe<ParagraphFragment>>;
};

export const Overview = ({
  image,
  items,
}: OverviewProps): React.JSX.Element => (
  <HStack maxWidth={520} alignItems={'start'}>
    <Image src={image} width={100} />
    <VStack alignItems={'start'}>
      {items?.map((item, idx) => (
        <Text key={idx} fontSize={'sm'}>
          {item?.para}
        </Text>
      ))}
    </VStack>
  </HStack>
);
