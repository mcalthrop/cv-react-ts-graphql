import { Text, VStack } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from '@/graphql/generated/graphql';
import { Section } from '@/components/Section';

type InterestsProps = {
  items?: Array<Maybe<ParagraphFragment>>;
};

export const Interests = ({ items }: InterestsProps): React.JSX.Element => (
  <Section heading={'Interests'}>
    <VStack alignItems={'start'}>
      {items?.map((item, idx) => (
        <Text key={idx} fontSize={'sm'}>
          {item?.para}
        </Text>
      ))}
    </VStack>
  </Section>
);
