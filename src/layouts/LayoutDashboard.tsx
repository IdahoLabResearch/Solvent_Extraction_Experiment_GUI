{/* Copyright 2024, Battelle Energy Alliance, LLC */}

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
import CardSelectedStageReadings from '../components/views/stages/CardSelectedStageReadings';
import CardSelectedSectionTimeseries from '../components/views/sections/CardSelectedSectionTimeseries';
import CardSelectedSectionResults from '../components/views/sections/CardSelectedSectionResults';
import CardSelectedSectionReadings from '../components/views/sections/CardSelectedSectionReadings';

function LayoutDashboard() {
  type stageCurrentlySelected = boolean;
  type sectionCurrentlySelected = boolean;
  type flowsheetConcentrations = [];
  type sectionInfoState = string;

  const selectionIsCurrentStage: stageCurrentlySelected = useAppSelector((state: any) => state.appState.stageCurrentlySelected);
  const selectionIsCurrentSection: sectionCurrentlySelected = useAppSelector((state: any) => state.appState.sectionCurrentlySelected);
  const getSectionInfoState: sectionInfoState = useAppSelector((state: any) => state.sections.sectionInfoState);

  type flowsheetConcentrationsList = Array<{ [key: string]: any; }>;
  const { data: flowsheetConcentrationsList } = useFetchFlowsheetQuery();

  return (
    <Box
      component="div"
      sx={{ padding: '30px' }}
    >
      <Grid container spacing={3}>
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
            <CardSelectedStageReadings />
          </Grid>
        </Fade>

        <Fade in={selectionIsCurrentSection} unmountOnExit>
          <Grid item xs={12} lg={12}>
            {getSectionInfoState === 'readings' && <CardSelectedSectionReadings />}
            {getSectionInfoState === 'timeseries' && <CardSelectedSectionTimeseries />}
            {getSectionInfoState === 'results' && <CardSelectedSectionResults />}
          </Grid>
        </Fade>
      </Grid>
    </Box>
  );
}

export default LayoutDashboard;
