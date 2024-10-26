// / <reference types="cypress" />
beforeEach(() => {
  cy.viewport(1920, 1020)
  cy.visit('https://zt.com.ua/')
})

it('language UA', () => {
  cy.title().should('eq', 'Фармацевтична компанія «Здоров\'я»')
  cy.url().should('include', 'ua')
  cy.get('header > .wrapper').should('be.visible')
      .within(() => {
          cy.contains('Зворотній зв\'язок')
          cy.contains('Меню')
      })
})

it('language RU', () => {
  cy.get('.language > a').click()
  cy.get('.lang-item:nth-child(1) > [href="https://zt.com.ua/ru/"]').click()
  cy.title().should('eq', 'Главная - Здоровье')
  cy.url().should('include', 'ru')
  cy.get('header > .wrapper').should('be.visible')
      .within(() => {
          cy.contains('Обратная связь')
          cy.contains('Меню')
      })
})

it('language DE', () => {
  cy.get('.language > a').click()
  cy.get('.lang-item:nth-child(2) > [href="https://zt.com.ua/de/"]').click()
  cy.title().should('eq', 'Startseite - Zdorovye')
  cy.url().should('include', 'de')
  cy.get('header > .wrapper').should('be.visible')
      .within(() => {
          cy.contains('Rückkopplung')
          cy.contains('Menü')
      })
})

it('language ES', () => {
  cy.get('.language > a').click()
  cy.get('.lang-item:nth-child(3) > [href="https://zt.com.ua/es/"]').click()
  cy.title().should('eq', 'Inicio - Zdorovye')
  cy.url().should('include', 'es')
  cy.get('header > .wrapper').should('be.visible')
      .within(() => {
          cy.contains('Realimentación ')
          cy.contains('Menú')
      })
})

it('language FR', () => {
  cy.get('.language > a').click()
  cy.get('.lang-item:nth-child(4) > [href="https://zt.com.ua/fr/"]').click()
  cy.title().should('eq', 'Accueil - Zdorovye')
  cy.url().should('include', 'fr')
  cy.get('header > .wrapper').should('be.visible')
      .within(() => {
          cy.contains('Réaction')
          cy.contains('Menu')
      })
})

it('language EN', () => {
  cy.get('.language > a').click()
  cy.get('.lang-item:nth-child(5) > [href="https://zt.com.ua/en/"]').click()
  cy.title().should('eq', 'Home - Zdorovye')
  cy.url().should('include', 'en')
  cy.get('header > .wrapper').should('be.visible')
      .within(() => {
          cy.contains('Feedback')
          cy.contains('Menu')
      })
})