class Language {
    validateUA() {
        cy.title().should('eq', 'Фармацевтична компанія «Здоров\'я»')
        cy.url().should('include', 'ua')
        cy.get('header > .wrapper').should('be.visible')
            .within(() => {
                cy.contains('Зворотній зв\'язок')
                cy.contains('Меню')
            })
    }
    validateRU() {
        cy.get('.language > a').click()
        cy.get('.lang-item:nth-child(1) > [href="https://zt.com.ua/ru/"]').click()
        cy.title().should('eq', 'Главная - Здоровье')
        cy.url().should('include', 'ru')
        cy.get('header > .wrapper').should('be.visible')
            .within(() => {
                cy.contains('Обратная связь')
                cy.contains('Меню')
            })
    }
    validateDE() {
        cy.get('.language > a').click()
        cy.get('.lang-item:nth-child(2) > [href="https://zt.com.ua/de/"]').click()
        cy.title().should('eq', 'Startseite - Zdorovye')
        cy.url().should('include', 'de')
        cy.get('header > .wrapper').should('be.visible')
            .within(() => {
                cy.contains('Rückkopplung')
                cy.contains('Menü')
            })
    }
    validateES() {
        cy.get('.language > a').click()
        cy.get('.lang-item:nth-child(3) > [href="https://zt.com.ua/es/"]').click()
        cy.title().should('eq', 'Inicio - Zdorovye')
        cy.url().should('include', 'es')
        cy.get('header > .wrapper').should('be.visible')
            .within(() => {
                cy.contains('Realimentación ')
                cy.contains('Menú')
            })
    }
    validateFR() {
        cy.get('.language > a').click()
        cy.get('.lang-item:nth-child(4) > [href="https://zt.com.ua/fr/"]').click()
        cy.title().should('eq', 'Accueil - Zdorovye')
        cy.url().should('include', 'fr')
        cy.get('header > .wrapper').should('be.visible')
            .within(() => {
                cy.contains('Réaction')
                cy.contains('Menu')
            })
    }
    validateEN() {
        cy.get('.language > a').click()
        cy.get('.lang-item:nth-child(5) > [href="https://zt.com.ua/en/"]').click()
        cy.title().should('eq', 'Home - Zdorovye')
        cy.url().should('include', 'en')
        cy.get('header > .wrapper').should('be.visible')
            .within(() => {
                cy.contains('Feedback')
                cy.contains('Menu')
            })
    }
}
export default Language;