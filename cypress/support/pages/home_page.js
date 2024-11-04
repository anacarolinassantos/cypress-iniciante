/// <reference types="cypress" />   

export default {
    acessarPaginaCadastro() {
   // Acessou aplicação
   cy.visit('/')
   .get('.header-logo')
   
   // Entrou no registro
   cy.get('.fa-lock')
   .click()
   
   // Verifica se esta na pagina de cadastro
   .get('#user')
   .should('be.visible')
    }
}