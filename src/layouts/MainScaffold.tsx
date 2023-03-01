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
import Drawer from '../components/coreapp/Drawer';

// Import styles
import '../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

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
