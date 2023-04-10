// React
import * as React from 'react';

// MUI Components
import {
  Box
} from '@mui/material';

// MUI Icons
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

const StatusIcon = ({alarm}: {alarm: boolean}) => {
  return (
    <>
      {alarm
        ? (
          <ErrorIcon
            sx={{ color: COLORS.colorError }}
          />
        ) : (
          <CheckCircleIcon
            sx={{ color: COLORS.colorSuccess }}
          />
        )
      }
    </>
  )
};

export default StatusIcon;