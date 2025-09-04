import { Box } from '@chakra-ui/react';
import { PiSpinnerThin } from 'react-icons/pi';

export const Loading = (): React.JSX.Element => (
  <Box marginY={10}>
    <PiSpinnerThin
      size={'50px'}
      role={'spinbutton'}
      style={{ animation: 'spin 2s linear infinite' }}
    />
  </Box>
);
