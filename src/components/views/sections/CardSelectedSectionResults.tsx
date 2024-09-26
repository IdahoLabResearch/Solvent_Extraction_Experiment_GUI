{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../../app/hooks/reduxTypeScriptHooks';

// Import Packages
import classNames from 'classnames';

// MUI Components
import {
  Grid,
  Box,
  Typography,
} from '@mui/material';

// MUI Icons
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';

// Custom Components
import ContentCard from '../../coreapp/ContentCard';
import ContentCardInline from '../../coreapp/ContentCardInline';

// Import styles
import '../../../styles/App.scss';
// @ts-ignore
import COLORS from '../../../styles/variables';

export default function CardSelectedStageResults() {
  type selectedSection = {
    id?: number;
    title?: string;
    ml?: Array<{ [key: string]: any; }>;
    mlStatus?: string;
  };

  const selectedSection = useAppSelector((state: any) => state.sections.selectedSection);

  console.log(selectedSection.mlStatus)

  return (
    <ContentCard className="selected-stage" title="Selected Section Information">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
        <ContentCardInline title={'Safeguards Assessment'}>
          <Grid
            container
            spacing={2}
            sx={{
              paddingTop: '12px',
              height: 'calc(100% + 16px)',
            }}
          >
            <Grid
              item
              xs={6}
              lg={2}
            >
              <Box
                component="div"
                sx={{
                  width: '100%',
                  height: '100%',
                  alignItems: 'stretch',
                  display: 'flex',
                  flexDirection: 'row',
                  alignContent: 'center',
                  justifyContent: 'center'
                }}
                className={classNames(
                  {
                    'outline-success': selectedSection.mlStatus === '',
                    'outline-error': selectedSection.mlStatus === 'alarm',
                  },
                )}
              >
                {selectedSection.mlStatus === ''
                  ? (
                    <Box
                      component="div"
                      sx={{
                        display: 'flex',
                        height: '100%',
                        width: '60px',
                        backgroundColor: COLORS.colorSuccessBackground,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <CheckCircleIcon
                        sx={{ color: COLORS.colorSuccess }}
                      />
                    </Box>
                  ) : (
                    <Box
                      component="div"
                      sx={{
                        display: 'flex',
                        height: '100%',
                        width: '60px',
                        backgroundColor: COLORS.colorErrorBackground,
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <ErrorIcon
                        sx={{ color: COLORS.colorError }}
                      />
                    </Box>
                  )}
                <Box
                  component="div"
                  sx={{
                    display: 'flex',
                    flexGrow: 1,
                    flexDirection: 'column',
                    backgroundColor: COLORS.colorGrayDarker,
                    minHeight: '50px',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Typography
                    variant="h5"
                    align="center"
                    sx={{
                      display: 'block',
                    }}
                  >
                    Status
                  </Typography>
                  <Typography
                    variant="h2"
                    align="center"
                    sx={{
                      display: 'block',
                    }}
                  >
                    {selectedSection.mlStatus === 'good' && 'Functioning Properly'}
                    {selectedSection.mlStatus === 'alarm' && 'Alarm'}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {selectedSection?.ml?.map((object: any) => {
              const key = object.title;
              return (
                <Grid
                  item
                  xs={6}
                  lg={2}
                  key={key}
                >
                  <Box
                    component="div"
                    sx={{
                      width: '100%',
                      height: '100%',
                      alignItems: 'stretch',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center'
                    }}
                  >
                    <Box
                      component="div"
                      sx={{
                        display: 'flex',
                        backgroundColor: COLORS.colorGrayDark,
                        minHeight: '50px',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography
                        align="center"
                        sx={{ fontSize: '14px'}}
                      >
                        {object.title}
                      </Typography>
                    </Box>
                    <Box
                      component="div"
                      sx={{
                        display: 'flex',
                        flexGrow: 1,
                        backgroundColor: COLORS.colorGrayDarker,
                        minHeight: '50px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px'
                      }}
                    >
                      <Typography
                        sx={{
                          textAlign: 'center',
                          lineHeight: '1.25',
                          fontSize: '.8rem'
                        }}
                      >
                        {object.value}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
          </ContentCardInline>
        </Grid>
      </Grid>
    </ContentCard>
  );
}
