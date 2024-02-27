// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../../app/hooks/reduxTypeScriptHooks';


// MUI Components
import {
  Grid
} from '@mui/material';
import ContentCard from '../../coreapp/ContentCard';
import ContentCardInline from '../../coreapp/ContentCardInline';
import CardStatus from '../../cards/CardStatus';
import Card3DModel from '../../cards/Card3DModel';
import CardLineGraph from '../../cards/CardLineGraph';

// Import styles
import '../../../styles/App.scss';

export default function CardSelectedStageTimeseries() {
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
    <ContentCard className="selected-stage" title="Selected Section Information">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <CardLineGraph />
        </Grid>
      </Grid>
    </ContentCard>
  );
}
