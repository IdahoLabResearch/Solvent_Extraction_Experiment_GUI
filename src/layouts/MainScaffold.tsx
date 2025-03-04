{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// MUI Styles
import { useTheme } from '@mui/material/styles';

// MUI Components
import {
  Box,
} from '@mui/material';

// Custom Components
import Header from '../components/coreapp/Header';
import DrawerLeft from '../components/coreapp/DrawerLeft';

// Import styles
import '../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

export default function MainScaffold(props: any) {
  const { children } = props;

  const theme = useTheme();

  return (
    <Box
      component="div"
      sx={{
        display: 'grid',
        gridTemplateRows: 'minmax(64px, auto) 1fr',
        overflow: 'hidden',
        margin: 0
      }}
    >
      <Box
        component="div"
        sx={{ }}
      >
        <Header />
      </Box>
      <Box
        component="div"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          height: 'calc(100vh - 64px)'
        }}
      >
        <DrawerLeft />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            padding: '20px',
            overflow: 'auto',
            margin: 0
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
}
