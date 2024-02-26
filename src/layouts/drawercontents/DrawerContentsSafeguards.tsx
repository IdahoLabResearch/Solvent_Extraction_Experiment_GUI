// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../app/hooks/reduxTypeScriptHooks';

// API calls
import { useFetchSectionsQuery } from '../../app/services/sectionsDataApi';

// Import Packages
import { DateTime } from 'luxon';

// MUI Components
import {
  Box,
  Grid,
  Typography
} from '@mui/material';

// Custom Components
import StatusBox from '../../components/status/StatusBox';
import ContentCardInline from '../../components/coreapp/ContentCardInline';

// Import styles
import '../../styles/App.scss';
// @ts-ignore
import COLORS from '../../styles/variables';

type Props = {};

const DrawerContentsSafeguards: React.FC<Props> = ({}) => {
  type sectionList = Array<{ [key: string]: any; }>;
  const { data: sectionList } = useFetchSectionsQuery();

  type sectionListWithErrors = Array<{ [key: string]: any; }>;
  const sectionListWithErrors = new Array(sectionList?.filter((section: any) => section.mlStatus !== null));
  const alarmBoolean = () => sectionListWithErrors?.length > 0;

  type sectionListWithSensorsAndError = Array<{ [key: string]: any; }>;
  const sectionListWithSensorsAndError = sectionList?.filter((section: any) => section.timeseries.values === true && section.mlStatus !== "");

  type sectionListWithSensorsAndNoError = Array<{ [key: string]: any; }>;
  const sectionListWithSensorsAndNoError = sectionList?.filter((section: any) => section.timeseries.values === true && section.mlStatus === "");

  return (
    <Box
      component="div"
      sx={{
        padding: '16px'
      }}
    >
      <Box
        component="div"
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'stretch',
          flexDirection: 'row',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <StatusBox alarm={alarmBoolean()} />
        <Box
          component="div"
          sx={{
            display: 'flex',
            flex: '1 100%',
            p: 3,
            backgroundColor: '#121212',
            alignItems: 'center'
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
                <span><strong>Alert:&nbsp;</strong>2 Sections with Issues</span>
              )
            }
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={2} sx={{ marginTop: '0px' }}>

      {sectionListWithSensorsAndError?.map((section: any, index: number) => {
        const key = index;

        return (
          <Grid item xs={12}>
            <ContentCardInline title={`Section: ${ section.title?.replace(/\b\w/, (c: string) => c.toUpperCase()) }`} >
              <Box
                component="div"
                key={key}
                sx={{ paddingTop: '8px'}}
              >
                {section.ml.map((mlValue: any, index: number) => {
                  return (
                    <Box
                      component="div"
                      key={index}
                      sx={{
                        width: '100%',
                        alignItems: 'stretch',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: '8px',
                        '&:last-of-type': {
                          marginBottom: 0
                        }
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          display: 'flex',
                          backgroundColor: COLORS.colorGrayDark,
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px',
                          width: '130px !important'
                        }}
                      >
                        <Typography
                          align="center"
                          sx={{ fontSize: '14px'}}
                        >
                          {mlValue.title}
                        </Typography>
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          display: 'flex',
                          flexGrow: 1,
                          backgroundColor: COLORS.colorGrayDarker,
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px'
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: 'center',
                            lineHeight: '1.25',
                            fontSize: '.8rem'
                          }}
                        >
                          {mlValue.value}
                        </Typography>
                      </Box>
                    </Box>
                  )
                })}
              </Box>
            </ContentCardInline>
          </Grid>
        )
      })}
      </Grid>

      {/* <Typography sx={{ background: COLORS.colorSuccess, marginTop: '24px', padding: '16px' }}>
        2 Monitored Sections Working Optimally
      </Typography> */}
      <Grid container spacing={2} sx={{ marginTop: '0px' }}>

      {sectionListWithSensorsAndNoError?.map((section: any, index: number) => {
        const key = index;

        return (
          <Grid item xs={12}>
            <ContentCardInline title={`Section ${ section.title }`} >
              <Box
                component="div"
                key={key}
                sx={{ paddingTop: '8px'}}
              >
                {section.ml.map((mlValue: any, index: number) => {
                  return (
                    <Box
                      component="div"
                      key={index}
                      sx={{
                        width: '100%',
                        alignItems: 'stretch',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: '8px',
                        '&:last-of-type': {
                          marginBottom: 0
                        }
                      }}
                    >
                      <Box
                        component="div"
                        sx={{
                          display: 'flex',
                          backgroundColor: COLORS.colorGrayDark,
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px',
                          width: '130px !important'
                        }}
                      >
                        <Typography
                          align="center"
                          sx={{ fontSize: '14px'}}
                        >
                          {mlValue.title}
                        </Typography>
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          display: 'flex',
                          flexGrow: 1,
                          backgroundColor: COLORS.colorGrayDarker,
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: '8px'
                        }}
                      >
                        <Typography
                          sx={{
                            textAlign: 'center',
                            lineHeight: '1.25',
                            fontSize: '.8rem'
                          }}
                        >
                          {mlValue.value}
                        </Typography>
                      </Box>
                    </Box>
                  )
                })}
              </Box>
            </ContentCardInline>
          </Grid>
        )
      })}
      </Grid>

    </Box>
  );
}

export default DrawerContentsSafeguards;
