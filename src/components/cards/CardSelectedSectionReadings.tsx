// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../app/hooks/reduxTypeScriptHooks';

// MUI Components
import { Grid } from '@mui/material';

// Custom Components
import ContentCard from '../coreapp/ContentCard';
import ContentCardInline from '../coreapp/ContentCardInline';
import CardStatus from './CardStatus';
import Card3DModel from './Card3DModel';

// Import styles
import '../../styles/App.scss';

export default function CardSelectedSectionReadings() {
  const selectedSection = useAppSelector((state: any) => state.sections.selectedSection);

  return (
    <ContentCard className="selected-section" title="Selected Section Information">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Grid
            container
            spacing={2}
            sx={{
              height: 'calc(100% + 16px)',
            }}
          >
            <Grid
              item
              xs={12}
            >
              <ContentCardInline data={selectedSection.statuses[0]} title={selectedSection.statuses[0].title}>
                <CardStatus data={selectedSection.statuses[0]} />
              </ContentCardInline>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <ContentCardInline data={selectedSection.statuses[1]} title={selectedSection.statuses[1].title}>
                <CardStatus data={selectedSection.statuses[1]} />
              </ContentCardInline>
            </Grid>
            <Grid
              item
              xs={12}
            >
              <ContentCardInline data={selectedSection.statuses[2]} title={selectedSection.statuses[2].title}>
                <CardStatus data={selectedSection.statuses[2]} />
              </ContentCardInline>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={8}>
          <Grid
              container
              spacing={2}
              sx={{
                height: 'calc(100% + 16px)',
              }}
            >
            {selectedSection.statuses.slice(3,9).map((object: any) => {
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
      </Grid>
    </ContentCard>
  );
}
