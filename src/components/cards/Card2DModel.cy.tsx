import React from 'react'
import Card2DModel from './Card2DModel'

describe('<Card2DModel />', () => {
  it('render desktop', () => {
    cy.viewport(1920, 1080)
    cy.mount(<Card2DModel />)
  })

  it('render laptop', () => {
    cy.viewport(1366, 768)
    cy.mount(<Card2DModel />)
  })

  it('render tablet (portrait)', () => {
    cy.viewport(768, 1024)
    cy.mount(<Card2DModel />)
  })

  it('render iphone', () => {
    cy.viewport(375, 812)
    cy.mount(<Card2DModel />)
  })

  it('render mobile', () => {
    cy.viewport(360, 800)
    cy.mount(<Card2DModel />)
  })
})