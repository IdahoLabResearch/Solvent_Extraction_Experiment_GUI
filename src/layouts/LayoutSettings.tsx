// React
import * as React from 'react';

// Custom Components
import PageCard from '../components/coreapp/PageCard'
import FormConfigSettings from '../components/forms/FormConfigSettings'
import FormContactorSettings from '../components/forms/FormContactorSettings'

function LayoutSettings() {
  return (
    <>
      <PageCard title="Application Settings">
        <FormConfigSettings />

      </PageCard>
      <PageCard title="Contactor Settings">

        <FormContactorSettings />
      </PageCard>
    </>
  )
}

export default LayoutSettings
