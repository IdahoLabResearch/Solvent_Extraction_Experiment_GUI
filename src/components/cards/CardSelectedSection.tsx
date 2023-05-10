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

export default function CardSelectedSection() {
  const selectedSection = useAppSelector((state: any) => state.sections.selectedSection);

  return (
    <ContentCard className="selected-section" title="Selected Section">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Grid
            container
            spacing={2}
            sx={{
              height: 'calc(100% + 16px)',
            }}
          >
            {selectedSection.statuses.map((object: any) => {
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
          <ContentCardInline title="Section 3D Model">
            <Card3DModel />
          </ContentCardInline>
        </Grid>

      </Grid>
    </ContentCard>
  );
}
