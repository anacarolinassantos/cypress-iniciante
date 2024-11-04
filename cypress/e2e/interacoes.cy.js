/// <reference types="cypress" />   

describe("Interações", () => {

    it('Digitar em um campo', () => {
        cy.visit('/')
        .get('.header-logo') 
    
        cy.get('.form-control')
            .type('ana@teste.com.br') //preencher um campo
    })

// Clicar
    it('Clicar', () => {
        cy.visit('/')
        .get('.header-logo') 

        cy.get('.fa-user')
           .click() //clicar 
    })

    // Clicar Botão
    it('Clicar botão', () => {
        cy.visit('/')
        .get('.header-logo') 

           // Simular apertar Enter
           cy.get('.form-control')
           .type('ana@teste.com.br{enter}')
    })

    // Selecionar
    it('Selecionar uma opção', () => {
        cy.visit('/')
        .get('.header-logo') 

           cy.get('.footer_one_widget')
          .contains('Checkout View Two')
          .click()

          cy.get('#country')
          .select('Colombia')
    })

        // Checkbox
        it.only('Checkbox e radio button', () => {
            cy.visit('/')
            .get('.header-logo') 
    
               cy.get('.footer_one_widget')
              .contains('Checkout View One')
              .click()
    
              cy.get('#materialUnchecked')
              .check()
            .uncheck() // desmarcar

            cy.get('#css')
            .check()
        })

})

