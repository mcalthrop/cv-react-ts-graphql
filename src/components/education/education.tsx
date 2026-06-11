import { Text, VStack } from '@chakra-ui/react';
import { Section } from '@/components/section';
import type { ParagraphFragment } from '@/graphql/generated/graphql';

type EducationProps = {
  items?: Array<ParagraphFragment | null>;
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
