import { Heading } from '@chakra-ui/react';

type SectionHeadingProps = {
  heading: string;
};

export function SectionHeading({ heading }: SectionHeadingProps): JSX.Element {
  return (
    <Heading as={'h2'} size={'lg'} marginTop={3} marginBottom={2}>
      {heading}
    </Heading>
  );
}
