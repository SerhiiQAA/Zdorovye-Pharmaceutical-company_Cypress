class MainP {
    validateTitle() {
        cy.location('protocol').should('eq', 'https:')
        cy.title().should('eq', 'Home - Zdorovye')
        cy.get('header > .wrapper').should('be.visible')
    }
    validateFirstBlock() {
        cy.get(':nth-child(1) > .content-wrapper').should('be.visible')
        cy.get(':nth-child(1) > .content-wrapper > h5').should('have.text', 'Zdorovye is quality of Your life!')
        // navigation btns rigth side
        cy.get('.home__buttons').should('be.visible')
    }
    validateSecondBlock() {
        cy.get('[data-slide="1"]').click()
        cy.get('[style="transform: translate3d(0px, 0px, 0px);"] > .content-wrapper').should('be.visible')
        cy.get('.content-wrapper__button').should('be.visible')
    }
    validateThirdBlock() {
        cy.get('[data-slide="2"]').click()
        cy.get('[style="transform: translate3d(0px, 0px, 0px);"] > .content-wrapper')
            .should('be.visible')
            .within(() => {
                cy.get('h5').contains('Pharmaceutical company «Zdorovye»:')
                cy.get('.swiper-pagination').should('be.visible')
                cy.get('.swiper-slide__button').should('have.text', 'Facts and Figures')
                cy.get('.swiper-button-prev').should('be.visible')
                cy.get('.swiper-button-next').should('be.visible')
            })
    }
}
export default MainP;