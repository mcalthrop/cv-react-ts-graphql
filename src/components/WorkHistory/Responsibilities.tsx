import { Box, Text } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from 'src/graphql-types';

type ResponsibilitiesProps = {
  items?: Array<Maybe<ParagraphFragment>>;
};

export function Responsibilities({
  items,
}: ResponsibilitiesProps): JSX.Element {
  return (
    <Box>
      {items?.map((item, idx) => (
        <Text key={idx} fontSize={'sm'} marginTop={0.5} letterSpacing={-0.25}>
          {item?.para}
        </Text>
      ))}
    </Box>
  );
}
