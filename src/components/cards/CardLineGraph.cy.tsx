import React from 'react'
import CardLineGraph from './CardLineGraph'

describe('<CardLineGraph />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CardLineGraph />)
  })
})