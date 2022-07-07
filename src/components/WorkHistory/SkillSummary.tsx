import { Box } from '@chakra-ui/react';
import type { WorkHistoryFragment } from 'src/graphql-types';

type SkillSummaryProps = {
  skillSummary: WorkHistoryFragment['skillSummary'];
};

export function SkillSummary({ skillSummary }: SkillSummaryProps): JSX.Element {
  return (
    <Box
      lineHeight={'110%'}
      marginTop={2}
      fontSize={'xs'}
      color={'blackAlpha.500'}
      letterSpacing={-0.5}
    >
      {skillSummary?.map((skill, idx) => (
        <Box key={idx} display={'inline-block'}>
          {idx === 0 ? '' : <>&nbsp;&bull; </>}
          {skill}
        </Box>
      ))}
    </Box>
  );
}
