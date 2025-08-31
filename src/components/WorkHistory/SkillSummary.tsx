import { Box } from '@chakra-ui/react';
import type { WorkHistoryFragment } from '@/graphql/generated/graphql';

export type SkillSummaryProps = {
  skillSummary: WorkHistoryFragment['skillSummary'];
};

export const SkillSummary = ({
  skillSummary,
}: SkillSummaryProps): React.JSX.Element => (
  <Box
    lineHeight={'110%'}
    marginTop={2}
    fontSize={'xs'}
    color={'fg.subtle'}
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
