/// <reference types="cypress" />   

describe("Assets", () => {

    it('Verificar se está visivel', () => {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.fa-user')
        .click()

        cy.get('.account_form > h3')
        .should('be.visible') // Se esta visivel

        cy.get('.account_form > h3')
        .should('contain', 'Login')
        .should('have.text', 'Login') // Verificar o texto "Login"

        cy.get('.account_form > h3')
        .then((element) => {
            expect(element.text()).eq('Login')
        })
    })
})

