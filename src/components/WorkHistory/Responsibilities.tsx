import { Box, Text } from '@chakra-ui/react';
import type { Maybe, ParagraphFragment } from '@/graphql/generated/graphql';

export type ResponsibilitiesProps = {
  items?: Array<Maybe<ParagraphFragment>>;
};

export const Responsibilities = ({
  items,
}: ResponsibilitiesProps): React.JSX.Element => (
  <Box>
    {items?.map((item, idx) => (
      <Text key={idx} fontSize={'sm'} marginTop={0.5} letterSpacing={-0.25}>
        {item?.para}
      </Text>
    ))}
  </Box>
);
