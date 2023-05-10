// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../app/hooks/reduxTypeScriptHooks';

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
import ContentCard from '../coreapp/ContentCard';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

export default function CardSelectedContactorResults() {
  type selectedContactor = {
    id?: number;
    section?: string;
    ml?: Array<{ [key: string]: any; }>;
    mlStatus?: string;
  };

  const currentContactor: selectedContactor = useAppSelector((state) => state.contactors.selectedContactor);

  return (
    <ContentCard className="selected-contactor" title="Selected Contactor Readings">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12}>
          <Grid
            container
            spacing={2}
            sx={{
              height: 'calc(100% + 16px)',
            }}
          >
            <Grid
              item
              xs={6}
              lg={2}
            >
              <Box
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
                    'outline-success': currentContactor.mlStatus === 'good',
                    'outline-error': currentContactor.mlStatus === 'alarm',
                  },
                )}
              >
                {currentContactor.mlStatus === 'good'
                  ? (
                    <Box
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
                  sx={{
                    display: 'flex',
                    flexGrow: 1,
                    flexDirection: 'column',
                    backgroundColor: COLORS.colorGrayDarkest,
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
                    {currentContactor.mlStatus === 'good' && 'Functioning Properly'}
                    {currentContactor.mlStatus === 'alarm' && 'Alarm'}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            {currentContactor?.ml?.map((object: any) => {
              const key = object.title;
              return (
                <Grid
                  item
                  xs={6}
                  lg={2}
                  key={key}
                >
                  <Box
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
                      sx={{
                        display: 'flex',
                        backgroundColor: COLORS.colorPrimary,
                        minHeight: '50px',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Typography
                        align="center"
                      >
                        {object.title}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexGrow: 1,
                        backgroundColor: COLORS.colorGrayDarkest,
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
        </Grid>
      </Grid>
    </ContentCard>
  );
}
