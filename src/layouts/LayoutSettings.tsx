{/* Copyright 2024, Battelle Energy Alliance, LLC */}

// React
import * as React from 'react';

// Custom Components
import PageCard from '../components/coreapp/PageCard';
import FormConfigSettings from '../components/forms/FormConfigSettings';
import FormStageSettings from '../components/forms/FormStageSettings';

function LayoutSettings() {
  return (
    <>
      <PageCard title="Application Settings">
        <FormConfigSettings />

      </PageCard>
      <PageCard title="Stage Settings">

        <FormStageSettings />
      </PageCard>
    </>
  )
}

export default LayoutSettings
