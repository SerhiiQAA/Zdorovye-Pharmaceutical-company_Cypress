import MainP from "../Pages/MainP";
// / <reference types="Cypress" />

describe('Main page', () => {
  it('Web', () => {
    cy.viewport(1900, 1020)
    cy.visit('https://zt.com.ua/en/')

    // cy.injectAxe();
    // cy.checkA11y();

    const Main = new MainP()

    Main.validateTitle()
    Main.validateFirstBlock()
    Main.validateSecondBlock()
    Main.validateThirdBlock()

  })
})