// React
import * as React from 'react';

// MUI Components
import {
  Box,
  Typography
} from '@mui/material';

// MUI Icons
import ErrorIcon from '@mui/icons-material/Error';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

const statusIcon = (
  <Box
    sx={{ display: 'flex', width: '50px', backgroundColor: COLORS.colorErrorBackground }}
    alignItems="center"
    justifyContent="center"
  >
    <ErrorIcon
      sx={{ color: COLORS.colorError }}
    />
  </Box>
);

export default function CardStatusSafeguard() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      {statusIcon}
      <Box
        sx={{
          display: 'flex', flex: '1 100%', p: 3, backgroundColor: '#121212', alignItems: 'center',
        }}
      >
        <Typography color={COLORS.colorError}>
          <span><strong>Alarm:&nbsp;</strong></span>
          Investigation needed urgently
        </Typography>
      </Box>
    </Box>
  );
}
