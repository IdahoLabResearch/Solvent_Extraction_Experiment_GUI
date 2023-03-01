import React from 'react'
import CardSelectedContactorReadings from './CardSelectedContactorReadings'

describe('<CardSelectedContactorReadings />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CardSelectedContactorReadings />)
  })
})