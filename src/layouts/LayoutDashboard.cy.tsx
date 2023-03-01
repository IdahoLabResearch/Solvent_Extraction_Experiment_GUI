import React from 'react'
import LayoutDashboard from './LayoutDashboard'

describe('<LayoutDashboard />', () => {
  it('render desktop', () => {
    cy.viewport(1920, 1080)
    cy.mount(<LayoutDashboard />)
  })
})