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
        error: '#errorMessageFirstName',
        successTitle: '#swal2-title',
        successSubtitle: '#swal2-html-container',
    }
}

// Ações/métodos/funções
export default {
salvarRegistro() {
    cy.get(elements.buttons.btnRegister)
    .click()
},

preencherNome(name) {
    cy.get(elements.fields.name)
    .type(name)
},

preencherEmail(email) {
    cy.get(elements.fields.email)
    .should('be.visible')
    .type(email)
},

preencherSenha(senha) {
    cy.get(elements.fields.password)
    .should('be.visible')
    .type(senha)
},

checarMensagem(message) {
    cy.get(elements.messagens.error, { timeout: 6000 })
    .should('be.visible') // Garante que o elemento está visível
    .and('contain', message)
},

checarMensagemSucesso(name) {
    cy.get(elements.messagens.successTitle, {timeout: 30000})
    .should('have.text', 'Cadastro realizado!')

    cy.get(elements.messagens.successSubtitle, {timeout: 30000})
    .should('have.text', `Bem-vindo ${name}`)
}
}
