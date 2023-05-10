// React
import * as React from 'react';

// API calls
import { useFetchStagesQuery } from '../../app/services/stagesDataApi';

// MUI Components
import {
  Box,
  Typography
} from '@mui/material';

// Custom Components
import StatusBox from '../status/StatusBox';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';


export default function CardStatusSafeguard(props: any) {
  type stageList = Array<{ [key: string]: any; }>;
  const { data: stageList } = useFetchStagesQuery();

  type stageListWithErrors = Array<{ [key: string]: any; }>;
  const stageListWithErrors = new Array(stageList?.filter((stage: any) => stage.mlStatus !== null));
  const alarmBoolean = () => stageListWithErrors?.length > 0;

  return (
    <>
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
        <StatusBox alarm={alarmBoolean()} />
        <Box
          sx={{
            display: 'flex', flex: '1 100%', p: 3, backgroundColor: '#121212', alignItems: 'center',
          }}
        >
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
            {alarmBoolean() === false
              ? (
                <span>Optimal system function</span>
              ) : (
                <span><strong>Alarm:&nbsp;</strong>Investigation needed</span>
              )
            }
          </Typography>
        </Box>
      </Box>
    </>
  );
}
