// React
import * as React from 'react';

// MUI Components
import {
  Box
} from '@mui/material';

// Custom Components
import StatusIcon from '../status/StatusIcon';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';


export default function StatusBox({alarm}: {alarm: boolean}) {
  return (
    <>
      <Box
       component="div"
        sx={{
          display: 'flex',
          width: '50px',
          ...(alarm === false && {
            backgroundColor: COLORS.colorSuccessBackground
          }),
          ...(alarm === true && {
            backgroundColor: COLORS.colorErrorBackground
          })
        }}
        alignItems="center"
        justifyContent="center"
      >
        <StatusIcon alarm={alarm} />
      </Box>
    </>
  );
}