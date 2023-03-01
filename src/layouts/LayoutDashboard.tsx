// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../app/hooks/reduxTypeScriptHooks';

// MUI Transitions
import Fade from '@mui/material/Fade';

// MUI Components
import { Grid, Box } from '@mui/material';

// Custom Components
import ContentCard from '../components/coreapp/ContentCard';
import ContentCardInline from '../components/coreapp/ContentCardInline';
import CardStatusSafeguard from '../components/cards/CardStatusSafeguard';
import CardStatusComponents from '../components/cards/CardStatusComponents';
import CardStatus from '../components/cards/CardStatus';
import Card2DModel from '../components/cards/Card2DModel';
import CardSelectedContactorReadings from '../components/cards/CardSelectedContactorReadings';
import CardSelectedContactorResults from '../components/cards/CardSelectedContactorResults';
import CardSelectedStage from '../components/cards/CardSelectedStage';

function LayoutDashboard() {
  type contactorCurrentlySelected = boolean;
  type stageCurrentlySelected = boolean;
  type systemConcentrations = [];
  type contactorInfoState = string;

  const selectionIsCurrentContactor: contactorCurrentlySelected = useAppSelector((state: any) => state.appState.contactorCurrentlySelected);
  const selectionIsCurrentStage: stageCurrentlySelected = useAppSelector((state: any) => state.appState.stageCurrentlySelected);
  const showSystemConcentrations: systemConcentrations = useAppSelector((state: any) => state.system.systemConcentrations);
  const getContactorInfoState: contactorInfoState = useAppSelector((state: any) => state.contactors.contactorInfoState);

  return (
    <Box sx={{ padding: '30px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3} style={{ display: 'flex', flexDirection: 'column' }}>
          <ContentCard className="safeguard-notification" title="Safeguard Notification">
            <CardStatusSafeguard />
          </ContentCard>
        </Grid>
        <Grid item xs={12} lg={9} style={{ display: 'flex' }}>
          <ContentCard className="system-component-status" title="System Component Status">
            <CardStatusComponents />
          </ContentCard>
        </Grid>
        <Grid item xs={12} lg={12}>
          <ContentCard className="contactor-system" title="Contactor System">
            <Grid container spacing={2}>
              {showSystemConcentrations.map((object: any) => {
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
        <Fade in={selectionIsCurrentContactor} unmountOnExit>
          <Grid item xs={12} lg={12}>
            {getContactorInfoState === 'readings' && <CardSelectedContactorReadings />}
            {getContactorInfoState === 'results' && <CardSelectedContactorResults />}
          </Grid>
        </Fade>

        <Fade in={selectionIsCurrentStage} unmountOnExit>
          <Grid item xs={12} lg={12}>
            <CardSelectedStage />
          </Grid>
        </Fade>
      </Grid>
    </Box>
  );
}

export default LayoutDashboard;
