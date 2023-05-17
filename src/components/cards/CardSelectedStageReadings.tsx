// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../app/hooks/reduxTypeScriptHooks';


// MUI Components
import {
  Grid
} from '@mui/material';
import ContentCard from '../coreapp/ContentCard';
import ContentCardInline from '../coreapp/ContentCardInline';
import CardStatus from './CardStatus';
import Card3DModel from './Card3DModel';
import CardLineGraph from './CardLineGraph';

// Import styles
import '../../styles/App.scss';

export default function CardSelectedStageReadings() {
  type selectedStage = {
    id?: number;
    statuses?: Array<{ [key: string]: any; }>;
    section?: string;
    ml?: Array<{ [key: string]: any; }>;
    mlStatus?: string;
  };

  type graphInfo = Array<{ [key: string]: any; }>;

  const currentStage: selectedStage = useAppSelector((state) => state.stages.selectedStage);
  const graphExampleInfo: graphInfo = useAppSelector((state) => state.graphInfo.graphInfo);

  return (
    <ContentCard className="selected-stage" title="Selected Stage Information">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Grid
            container
            spacing={2}
            sx={{
              height: 'calc(100% + 16px)',
            }}
          >
            {currentStage?.statuses?.map((object: any) => {
              const key = object.title;
              return (
                <Grid
                  item
                  xs={6}
                  lg={6}
                  key={key}
                >
                  <ContentCardInline data={object} title={object.title}>
                    <CardStatus data={object} />
                  </ContentCardInline>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid item xs={12} lg={6}>
          <ContentCardInline title="Stage 3D Model">
            <Card3DModel />
          </ContentCardInline>
        </Grid>

        <Grid item xs={12}>
          <ContentCardInline title={'Sensor Readings Over Time'}>
            <CardLineGraph />
          </ContentCardInline>
        </Grid>
      </Grid>
    </ContentCard>
  );
}
