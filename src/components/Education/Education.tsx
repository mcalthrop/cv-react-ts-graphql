import { Text, VStack } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';

type EducationProps = {
  items?: Array<Maybe<ParagraphFragment>>;
};

export function Education({ items }: EducationProps): JSX.Element {
  return (
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
}
