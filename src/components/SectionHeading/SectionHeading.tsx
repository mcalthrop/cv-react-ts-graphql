import { Heading } from '@chakra-ui/react';

export type SectionHeadingProps = {
  heading: string;
};

export const SectionHeading = ({
  heading,
}: SectionHeadingProps): JSX.Element => (
  <Heading as={'h2'} size={'lg'} marginTop={3} marginBottom={2}>
    {heading}
  </Heading>
);
