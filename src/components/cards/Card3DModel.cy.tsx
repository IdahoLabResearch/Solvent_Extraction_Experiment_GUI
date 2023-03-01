import React from 'react'
import Card3DModel from './Card3DModel'

describe('<Card3DModel />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Card3DModel />)
  })
})