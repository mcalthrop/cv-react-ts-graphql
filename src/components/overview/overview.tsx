import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Section } from '@/components/section';
import type { Maybe, ParagraphFragment } from '@/graphql/generated/graphql';

type OverviewProps = {
  image?: Maybe<string>;
  items?: Array<Maybe<ParagraphFragment>>;
};

export const Overview = ({
  image,
  items,
}: OverviewProps): React.JSX.Element => (
  <Section>
    <HStack maxWidth={520} alignItems={'start'}>
      {image ? <Image src={image} width={100} /> : null}
      <VStack alignItems={'start'} gap={1}>
        {items?.map((item, idx) =>
          item ? (
            <Text key={idx} fontSize={'sm'}>
              {item.para}
            </Text>
          ) : null,
        )}
      </VStack>
    </HStack>
  </Section>
);
