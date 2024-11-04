/// <reference types="cypress" />   

// Elementos
const elements = {
    buttons: {
        btnRegister: '#btnRegister',

    },
    fields: {
        name: '#user',
        email: '#email',
        password: '#password',
    },
    messagens: {    
        error: '.errorLabel',
        sucessTitle: '#swal2-title',
        sucessSubtitle: '#swal2-html-container',
    }
}

// Ações/métodos/funções
Cypress.Commands.add('salvarRegistro', () => {
    cy.get(elements.buttons.btnRegister)
    .click()
})

Cypress.Commands.add('preencherNome', (name) => {
    cy.get(elements.fields.name)
    .type(name)
})

Cypress.Commands.add('preencherEmail', (email) => {
    cy.get(elements.fields.email)
    .should('be.visible')
    .type(email)
})

Cypress.Commands.add('preencherSenha', (senha) => {
    cy.get(elements.fields.password)
    .should('be.visible')
    .type(senha)
})

Cypress.Commands.add('checarMensagem', (message) => {
    cy.visit(elements.messagens.error)
    .get('have.text', message)
})

Cypress.Commands.add('cadastroComSucesso', (name) => {
    cy.get(elements.messagens.sucessTitle)
    .should('have.text', 'Cadastro realizado!')

    cy.get(elements.messagens.sucessSubtitle)
    .should('have.text', `Bem vindo ${name}!`)
})
