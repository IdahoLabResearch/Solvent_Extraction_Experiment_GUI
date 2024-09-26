{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../app/hooks/reduxTypeScriptHooks';

// MUI Components
import {
  Box,
} from '@mui/material';

type Props = {};

const DrawerContentsSettings: React.FC<Props> = ({}) => {
  type openDrawerLeftState = boolean;
  const openDrawerLeftState: openDrawerLeftState = useAppSelector((state: any) => state.appState.openDrawerLeft);

  type openDrawerLeftWidth = number;
  const openDrawerLeftWidth: openDrawerLeftWidth = useAppSelector((state: any) => state.appState.openDrawerLeftWidth);

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden'
      }}
    >
      <Box
        component="div"
        sx={{
          flex: 1,
          minHeight: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
          padding: '0 16px 16px'
        }}
      >
        Sources go here
      </Box>
    </Box>
  );
}

export default DrawerContentsSettings;
