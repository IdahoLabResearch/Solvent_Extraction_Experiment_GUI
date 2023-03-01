// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../app/hooks/reduxTypeScriptHooks';

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

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

export default function CardStatusComponents() {
  type components = Object[];

  const componentsList: components = useAppSelector((state) => state.components.componentsList);

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
        {componentsList.map((component: any) => {
          const key = component.title;
          return (
            <Slide key={key} index={0}>
              <Box
                sx={{
                  display: 'flex',
                  flexGrow: 1
                }}
              >
                { component.status === 'good'
                  ? (
                    <Box
                      sx={{ display: 'flex', width: '50px', backgroundColor: COLORS.colorSuccessBackground }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <CheckCircleIcon
                        sx={{ color: COLORS.colorSuccess }}
                      />
                    </Box>
                  )
                  : (
                    <Box
                      sx={{ display: 'flex', width: '50px', backgroundColor: COLORS.colorErrorBackground }}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <ErrorIcon
                        sx={{ color: COLORS.colorError }}
                      />
                    </Box>
                  )}
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
