import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from 'src/graphql-types';

type OverviewProps = {
  image?: string;
  items?: Array<Maybe<ParagraphFragment>>;
};

export function Overview({ image, items }: OverviewProps): JSX.Element {
  return (
    <HStack maxWidth={520} alignItems={'start'}>
      <Image src={image} width={100} />
      <VStack>
        {items?.map((item, idx) => (
          <Text key={idx} fontSize={'sm'}>
            {item?.para}
          </Text>
        ))}
      </VStack>
    </HStack>
  );
}
