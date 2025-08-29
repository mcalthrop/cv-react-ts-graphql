import { Text, VStack } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from '@/graphql-types';
import { SectionHeading } from '../SectionHeading';

export type EducationProps = {
  items?: Array<Maybe<ParagraphFragment>>;
};

export const Education = ({ items }: EducationProps): React.JSX.Element => (
  <>
    <SectionHeading heading={'Education'} />
    <VStack alignItems={'start'}>
      {items?.map((item, idx) => (
        <Text key={idx} fontSize={'sm'}>
          {item?.para}
        </Text>
      ))}
    </VStack>
  </>
);
