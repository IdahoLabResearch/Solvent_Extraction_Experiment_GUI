// React
import * as React from 'react';

// API calls
import { useFetchStagesQuery } from '../../app/services/stagesDataApi';

// Hooks
import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks/reduxTypeScriptHooks';

// Import Redux Actions
import { appStateActions } from '../../app/store/index';

// MUI Components
import {
  AppBar,
  Box,
  Button,
  Paper,
  Toolbar,
  Typography
} from '@mui/material';

// Custom Components
import StatusBox from '../../components/status/StatusBox';

// Styles
// @ts-ignore
import COLORS from '../../styles/variables';

export default function Header(props: any) {
  const dispatch = useAppDispatch();

  type stageList = Array<{ [key: string]: any; }>;
  const { data: stageList } = useFetchStagesQuery();

  type stageListWithErrors = Array<{ [key: string]: any; }>;
  const stageListWithErrors = new Array(stageList?.filter((stage: any) => stage.mlStatus !== null));
  const alarmBoolean = () => stageListWithErrors?.length > 0;

  type openDrawerLeftState = boolean;
  const openDrawerLeftState: openDrawerLeftState = useAppSelector((state: any) => state.appState.openDrawerLeft);

  type openDrawerLeftWidth = number;
  const openDrawerLeftWidth: openDrawerLeftWidth = useAppSelector((state: any) => state.appState.openDrawerLeftWidth);

  const handleToggleOpenDrawerLeft = () => {
    dispatch(appStateActions.toggleDrawerLeft());
    if (openDrawerLeftWidth === 64) {
      dispatch(appStateActions.setDrawerLeftWidth(450));
    } else if (openDrawerLeftWidth === 450 || openDrawerLeftWidth === 800) {
      dispatch(appStateActions.setDrawerLeftWidth(64));
    }
  };

  return (
    <AppBar elevation={3} color={"secondary"} >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
          <img src="/LBL_Logo_Final_NoText.png" alt="logo" style={{ marginLeft: '-8px', marginRight: '15px', height: '26px' }} />
          <Typography variant="h6" color="inherit" noWrap>
            Lindsay Boulevard Laboratory
          </Typography>
        </Box>
        <Box
          sx={{
            height: '50px',
            display: 'flex',
            alignItems: 'stretch',
            flexDirection: 'row',
            marginRight: '-24px'
          }}
        >

          <StatusBox alarm={alarmBoolean()} />
          <Box
            sx={{
              display: 'flex', padding: '0 10px', backgroundColor: '#121212', alignItems: 'center',
            }}
          >
            {alarmBoolean() === false
              ? (
                <Typography 
                  sx={{  
                    ...(alarmBoolean() === false && {
                      color: COLORS.colorSuccess
                    }),
                    ...(alarmBoolean() === true && {
                      color: COLORS.colorError
                    }),
                  }}
                >
                  <span>No Safeguard Alerts</span>
                </Typography>
              ) : (
                <Button variant="contained" color="error" size="small" onClick={() => handleToggleOpenDrawerLeft() }>See Safeguard Alerts</Button>
              )
            }
            
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
