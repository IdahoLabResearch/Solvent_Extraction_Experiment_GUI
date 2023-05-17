// React
import * as React from 'react';

// API calls
import { useFetchStagesQuery } from '../../app/services/stagesDataApi';

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
  type stageList = Array<{ [key: string]: any; }>;
  const { data: stageList } = useFetchStagesQuery();

  type stageListWithErrors = Array<{ [key: string]: any; }>;
  const stageListWithErrors = new Array(stageList?.filter((stage: any) => stage.mlStatus !== null));
  const alarmBoolean = () => stageListWithErrors?.length > 0;

  return (
    <AppBar elevation={3} color={"secondary"} >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap component="div">
          BCTC GUI
        </Typography>
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
                <Button variant="contained" color="error" size="small">See Safeguard Alerts</Button>
              )
            }
            
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
