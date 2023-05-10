import React from 'react'
import CardSelectedStageReadings from './CardSelectedStageReadings'

describe('<CardSelectedStageReadings />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CardSelectedStageReadings />)
  })
})