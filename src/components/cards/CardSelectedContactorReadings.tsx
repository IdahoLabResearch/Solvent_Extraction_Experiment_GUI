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

export default function CardSelectedContactorReadings() {
  type selectedContactor = {
    id?: number;
    statuses?: Array<{ [key: string]: any; }>;
    stage?: string;
    ml?: Array<{ [key: string]: any; }>;
    mlStatus?: string;
  };

  type graphInfo = Array<{ [key: string]: any; }>;

  const currentContactor: selectedContactor = useAppSelector((state) => state.contactors.selectedContactor);
  const graphExampleInfo: graphInfo = useAppSelector((state) => state.graphInfo.graphInfo);

  return (
    <ContentCard className="selected-contactor" title="Selected Contactor">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Grid
            container
            spacing={2}
            sx={{
              height: 'calc(100% + 16px)',
            }}
          >
            {currentContactor?.statuses?.map((object: any) => {
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
          <ContentCardInline title="Contactor 3D Model">
            <Card3DModel />
          </ContentCardInline>
        </Grid>

        {graphExampleInfo.map((object: any) => {
          const key = object.title;
          return (
            <Grid item xs={12} lg={4} key={key}>
              <ContentCardInline data={object} title={object.title}>
                <CardLineGraph />
              </ContentCardInline>
            </Grid>
          );
        })}
      </Grid>
    </ContentCard>
  );
}
