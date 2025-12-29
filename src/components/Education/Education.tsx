import { Text, VStack } from '@chakra-ui/react';
import { Section } from '@/components/Section';
import type { Maybe, ParagraphFragment } from '@/graphql/generated/graphql';

type EducationProps = {
  items?: Array<Maybe<ParagraphFragment>>;
};

export const Education = ({ items }: EducationProps): React.JSX.Element => (
  <Section heading={'Education'}>
    <VStack alignItems={'start'}>
      {items?.map((item, idx) => (
        <Text key={idx} fontSize={'sm'}>
          {item?.para}
        </Text>
      ))}
    </VStack>
  </Section>
);
