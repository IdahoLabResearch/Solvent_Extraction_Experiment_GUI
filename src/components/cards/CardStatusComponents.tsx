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

// MUI Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

// Custom Components
import StatusBox from '../status/StatusBox';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

export default function CardStatusComponents() {
  type componentsList = Array<{ [key: string]: any; }>;
  const { data } = useFetchComponentsQuery();
  let componentsList = data || [];

  const alarmBoolean = (component: any) => component.status !== null;

  return (
    <CarouselProvider
      naturalSlideWidth={500}
      naturalSlideHeight={100}
      isIntrinsicHeight
      totalSlides={componentsList.length}
      visibleSlides={3}
      className="carousel-parent"
    >
      {/* <ButtonBack className='carousel-back-button'><ArrowBackIosNewIcon /></ButtonBack> */}

      <Slider className="carousel-slider">
        {componentsList?.map((component: any) => {
          const key = component.title;
          return (
            <Slide key={key} index={0}>
              <Box
                sx={{
                  display: 'flex',
                  flexGrow: 1
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
            </Slide>
          );
        })}
      </Slider>
      {/* <ButtonNext className='carousel-next-button'><ArrowForwardIosIcon /></ButtonNext> */}
    </CarouselProvider>
  );
}
