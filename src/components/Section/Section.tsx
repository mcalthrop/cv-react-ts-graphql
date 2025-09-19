'use client';

import { Box, Heading, VStack } from '@chakra-ui/react';

type SectionProps = React.PropsWithChildren & {
  heading?: string;
};

export const Section = ({
  heading,
  children,
}: SectionProps): React.JSX.Element => (
  <VStack as={'section'} alignItems={'start'} gap={2}>
    {heading ? (
      <Heading as={'h2'} size={'lg'}>
        {heading}
      </Heading>
    ) : null}
    <Box>{children}</Box>
  </VStack>
);
