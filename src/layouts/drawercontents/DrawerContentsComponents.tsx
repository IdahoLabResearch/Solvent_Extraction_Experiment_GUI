// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../app/hooks/reduxTypeScriptHooks';

// API calls
import { useFetchComponentsQuery } from '../../app/services/componentsDataApi';

// Import Packages
import { DateTime } from 'luxon';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
// import { ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

// MUI Components
import {
  Box,
  Typography
} from '@mui/material';

// Custom Components
import StatusBox from '../../components/status/StatusBox';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

type Props = {};

const DrawerContentsComponents: React.FC<Props> = ({}) => {
  type componentsList = Array<{ [key: string]: any; }>;
  const { data } = useFetchComponentsQuery();
  let componentsList = data || [];

  const alarmBoolean = (component: any) => component.status !== null;

  return (
    <Box sx={{ padding: '16px'}}>
      {componentsList?.map((component: any) => {
        const key = component.title;
        return (
          <Box
            sx={{
              display: 'flex',
              marginBottom: '16px'
            }}
          >
            <StatusBox alarm={alarmBoolean(component)} />
            <Box
              sx={{ display: 'flex', flex: '1 100%', backgroundColor: '#121212' }}
            >
              <Box
                sx={{
                  display: 'flex', flex: '1 1 100%', alignItems: 'center', padding: '6px 20px',
                }}
              >
                <Typography><strong>{component.title}</strong></Typography>
              </Box>
              <Box
                className="status-time"
                sx={{
                  display: 'flex', justifyContent: 'center', flex: '0 50%', flexDirection: 'column', padding: '12px 16px', textAlign: 'right', fontSize: '.85rem!important',
                }}
              >
                <Typography sx={{ fontSize: '.85rem!important' }}>
                  <strong>Updated:</strong>
                </Typography>
                <Typography sx={{ fontSize: '.85rem!important' }}>
                  { DateTime.fromISO(component.updated).toLocaleString() }
                </Typography>
                <Typography sx={{ fontSize: '.85rem!important' }}>
                { DateTime.fromISO(component.updated).toLocaleString(DateTime.TIME_SIMPLE) }
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

export default DrawerContentsComponents;
