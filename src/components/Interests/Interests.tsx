import { Text, VStack } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from 'src/graphql-types';
import { SectionHeading } from '../SectionHeading';

export type InterestsProps = {
  items?: Array<Maybe<ParagraphFragment>>;
};

export const Interests = ({ items }: InterestsProps): JSX.Element => (
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
