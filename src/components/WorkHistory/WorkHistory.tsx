import { Flex } from '@chakra-ui/react';
import { Section } from '@/components/Section';
import type { Maybe, WorkHistoryFragment } from '@/graphql/generated/graphql';
import { WorkHistoryItem } from './WorkHistoryItem';

type WorkHistoryProps = {
  items?: Array<Maybe<WorkHistoryFragment>>;
};

export const WorkHistory = ({ items }: WorkHistoryProps): React.JSX.Element => (
  <Section heading={'Work history'}>
    <Flex gap={2} direction={'column'}>
      {items?.map((item, idx) => (
        <WorkHistoryItem key={idx} item={item} />
      ))}
    </Flex>
  </Section>
);
