import { Box, Text } from '@chakra-ui/react';
import type { Maybe, WorkHistoryFragment } from 'src/graphql-types';
import { EmployerLink } from './EmployerLink';

type WorkHistoryItemProps = {
  item: Maybe<WorkHistoryFragment>;
};

export function WorkHistoryItem({ item }: WorkHistoryItemProps): JSX.Element {
  return (
    <Box marginBottom={2}>
      <EmployerLink item={item} />
      <Text fontSize={'sm'} fontWeight={600}>
        {item?.roleTitle}
      </Text>
      <Text fontSize={'sm'}>
        {item?.location} &bull; {item?.dateFrom}-{item?.dateTo}
      </Text>
      {item?.responsibilitiesCollection?.items?.map((item, idx) => (
        <Text key={idx} fontSize={'sm'} marginTop={1}>
          {item?.para}
        </Text>
      ))}
      <Box lineHeight={'70%'} marginTop={2}>
        {item?.skillSummary?.map((skill, idx) => (
          <Box
            key={idx}
            fontSize={'xs'}
            color={'gray.400'}
            display={'inline-block'}
          >
            {idx === 0 ? '' : <>&nbsp;&bull; </>}
            {skill}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
