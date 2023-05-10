// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../app/hooks/reduxTypeScriptHooks';

// API calls
import { useFetchFlowsheetQuery } from '../app/services/flowsheetDataApi';

// MUI Transitions
import Fade from '@mui/material/Fade';

// MUI Components
import { Grid, Box } from '@mui/material';

// Custom Components
import ContentCard from '../components/coreapp/ContentCard';
import ContentCardInline from '../components/coreapp/ContentCardInline';
// import CardStatusSafeguard from '../components/cards/CardStatusSafeguard';
// import CardStatusComponents from '../components/cards/CardStatusComponents';
import CardStatus from '../components/cards/CardStatus';
import Card2DModel from '../components/cards/Card2DModel';
import CardSelectedStageReadings from '../components/cards/CardSelectedStageReadings';
import CardSelectedStageResults from '../components/cards/CardSelectedStageResults';
import CardSelectedSection from '../components/cards/CardSelectedSection';

function LayoutDashboard() {
  type stageCurrentlySelected = boolean;
  type sectionCurrentlySelected = boolean;
  type flowsheetConcentrations = [];
  type stageInfoState = string;

  const selectionIsCurrentStage: stageCurrentlySelected = useAppSelector((state: any) => state.appState.stageCurrentlySelected);
  const selectionIsCurrentSection: sectionCurrentlySelected = useAppSelector((state: any) => state.appState.sectionCurrentlySelected);
  const getStageInfoState: stageInfoState = useAppSelector((state: any) => state.stages.stageInfoState);

  type flowsheetConcentrationsList = Array<{ [key: string]: any; }>;
  const { data: flowsheetConcentrationsList } = useFetchFlowsheetQuery();

  return (
    <Box sx={{ padding: '30px' }}>
      <Grid container spacing={3}>
        {/* <Grid item xs={12} lg={3} style={{ display: 'flex', flexDirection: 'column' }}>
          <ContentCard className="safeguard-notification" title="Safeguard Notification">
            <CardStatusSafeguard />
          </ContentCard>
        </Grid>
        <Grid item xs={12} lg={9} style={{ display: 'flex' }}>
          <ContentCard className="flowsheet-component-status" title="Flowsheet Component Status">
            <CardStatusComponents />
          </ContentCard>
        </Grid> */}
        <Grid item xs={12} lg={12}>
          <ContentCard className="stage-flowsheet" title="Flowsheet Overview">
            <Grid container spacing={2}>
              {flowsheetConcentrationsList?.map((object: any) => {
                const id = object.title;
                return (
                  <Grid item xs={6} lg={3} key={id}>
                    <ContentCardInline data={object} title={object.title}>
                      <CardStatus data={object} />
                    </ContentCardInline>
                  </Grid>
                );
              })}
              <Grid item xs={12}>
                <ContentCardInline>
                  <Card2DModel />
                </ContentCardInline>
              </Grid>
            </Grid>
          </ContentCard>
        </Grid>
        <Fade in={selectionIsCurrentStage} unmountOnExit>
          <Grid item xs={12} lg={12}>
            {getStageInfoState === 'readings' && <CardSelectedStageReadings />}
            {getStageInfoState === 'results' && <CardSelectedStageResults />}
          </Grid>
        </Fade>

        <Fade in={selectionIsCurrentSection} unmountOnExit>
          <Grid item xs={12} lg={12}>
            <CardSelectedSection />
          </Grid>
        </Fade>
      </Grid>
    </Box>
  );
}

export default LayoutDashboard;
