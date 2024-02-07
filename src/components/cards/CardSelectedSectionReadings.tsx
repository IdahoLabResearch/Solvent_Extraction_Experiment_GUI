// React
import * as React from 'react';

// Hooks
import { useAppSelector } from '../../app/hooks/reduxTypeScriptHooks';

// MUI Components
import { Grid } from '@mui/material';

// Custom Components
import ContentCard from '../coreapp/ContentCard';
import ContentCardInline from '../coreapp/ContentCardInline';
import ContentCardOutline from '../coreapp/ContentCardOutline';  
import CardStatus from './CardStatus';
import Card3DModel from './Card3DModel';

// Import styles
import '../../styles/App.scss';

export default function CardSelectedSectionReadings() {
  const selectedSection = useAppSelector((state: any) => state.sections.selectedSection);
  console.log(selectedSection)

  return (
    <ContentCard className="selected-section" title="Selected Section Information">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <ContentCardOutline 
            title={selectedSection.statuses[0].title}
          >
            <Grid
              container
              spacing={2}
              sx={{
                height: 'calc(100% + 16px)',
              }}
            >
              {selectedSection.statuses[0].value.map((object: any, index: number) => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={index}
                  >
                    <ContentCardInline data={object} title={object.title}>
                      <CardStatus key={index} data={object} />
                    </ContentCardInline>
                  </Grid>
                )
              })}

          </Grid>
          </ContentCardOutline>
        </Grid>
        <Grid item xs={4}>
          <ContentCardOutline 
            title={selectedSection.statuses[1].title}
          >
            <Grid
              container
              spacing={2}
              sx={{
                height: 'calc(100% + 16px)',
              }}
            >
              {selectedSection.statuses[1].value.map((object: any, index: number) => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={index}
                  >
                    <ContentCardInline data={object} title={object.title}>
                      <CardStatus key={index} data={object} />
                    </ContentCardInline>
                  </Grid>
                )
              })}

          </Grid>
          </ContentCardOutline>
        </Grid>
        <Grid item xs={4}>
          <ContentCardOutline 
            title={selectedSection.statuses[2].title}
          >
            <Grid
              container
              spacing={2}
              sx={{
                height: 'calc(100% + 16px)',
              }}
            >
              {selectedSection.statuses[2].value.map((object: any, index: number) => {
                return (
                  <Grid
                    item
                    xs={12}
                    key={index}
                  >
                    <ContentCardInline data={object} title={object.title}>
                      <CardStatus key={index} data={object} />
                    </ContentCardInline>
                  </Grid>
                )
              })}

          </Grid>
          </ContentCardOutline>
        </Grid>
      </Grid>
    </ContentCard>
  );
}
