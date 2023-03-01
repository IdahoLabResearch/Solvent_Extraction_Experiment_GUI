import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';

import '../styles/App.scss';
import COLORS from '../../src/styles/variables';

// Custom Components
import Header from '../components/coreapp/Header';
import Drawer from '../components/coreapp/Drawer';

export default function MainScaffold(props: any) {
  const { children } = props;

  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Drawer />
      <Box component="main" sx={{ flexGrow: 1, padding: '85px 20px 20px' }}>
        {children}
      </Box>
    </Box>
  );
}
