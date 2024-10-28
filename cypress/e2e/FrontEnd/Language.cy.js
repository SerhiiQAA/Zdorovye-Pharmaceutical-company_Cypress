import Language from "../Pages/Language";
// / <reference types="cypress" />
beforeEach(() => {
  cy.viewport(1920, 1020)
  cy.visit('/')
})

const Lang = new Language()

it('language UA', () => {
  Lang.validateUA()
})

it('language RU', () => {
    Lang.validateRU()
})

it('language DE', () => {
    Lang.validateDE()
})

it('language ES', () => {
    Lang.validateES()
})

it('language FR', () => {
    Lang.validateFR()
})

it('language EN', () => {
    Lang.validateEN()
})