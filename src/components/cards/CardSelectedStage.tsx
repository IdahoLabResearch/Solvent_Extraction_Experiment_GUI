import * as React from 'react';

import { useAppSelector } from '../../app/hooks';

import { Grid } from '@mui/material';
import ContentCard from '../coreapp/ContentCard';
import ContentCardInline from '../coreapp/ContentCardInline';
import CardStatus from './CardStatus';
import Card3DModel2 from './Card3DModel2';

import '../../styles/App.scss';

export default function CardSelectedStage() {
  const selectedStage = useAppSelector((state: any) => state.stages.selectedStage);

  return (
    <ContentCard className="selected-stage" title="Selected Stage">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Grid
            container
            spacing={2}
            sx={{
              height: 'calc(100% + 16px)',
            }}
          >
            {selectedStage.statuses.map((object: any) => {
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
          <ContentCardInline title="Process Block 3D Model">
            <Card3DModel2 />
          </ContentCardInline>
        </Grid>

      </Grid>
    </ContentCard>
  );
}
