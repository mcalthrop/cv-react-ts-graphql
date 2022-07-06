import { Text, VStack } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';

type InterestsProps = {
  items?: Array<Maybe<ParagraphFragment>>;
};

export function Interests({ items }: InterestsProps): JSX.Element {
  return (
    <>
      <SectionHeading heading={'Interests'} />
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
