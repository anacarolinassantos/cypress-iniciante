/// <reference types="cypress" />   

import { faker } from '@faker-js/faker'
import home_page from '../support/pages/home_page'
import register_page from '../support/pages/register_page'

const user_data = require('../fixtures/desafio_valid_data.json')

describe('Cadastro de usuário', () => {

    beforeEach('Acessando página de cadastro', () => {  // usar before quando o teste for o mesmo sempre

    home_page.acessarPaginaCadastro()

    }) 
    it('Validar campo nome vazio', () => {
        register_page.salvarRegistro()
        register_page.checarMensagem('O campo nome deve ser prenchido')
        })

    it('Validar campo e-mail vazio', () => {
        register_page.preencherNome(user_data.name)
        register_page.salvarRegistro()
        register_page.checarMensagem('O campo e-mail deve ser prenchido corretamente')
    })
        
    it('Validar campo e-mail inválido', () => {
        register_page.preencherNome(user_data.name)
        register_page.preencherEmail('emailinvalido')
        register_page.salvarRegistro()
        register_page.checarMensagem('O campo e-mail deve ser prenchido corretamente')
    })    
    it('Validar campo senha vazio', () => {    
        register_page.preencherNome(user_data.name)
        register_page.preencherEmail(user_data.email)
        register_page.salvarRegistro()
        register_page.checarMensagem('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Validar campo senha inválido', () => {
        register_page.preencherNome(user_data.name)
        register_page.preencherEmail(user_data.email)
        register_page.preencherSenha('123')
        register_page.salvarRegistro()
        register_page.checarMensagem('O campo senha deve ter pelo menos 6 dígitos')
    })

    it('Cadastro realizado com Sucesso', () => {
        const name = faker.person.fullName() // Criado const para gerar apenas 1 vez um nome aleatorio

        register_page.preencherNome(name)
        register_page.preencherEmail(user_data.email)
        register_page.preencherSenha(user_data.password)
        register_page.salvarRegistro()
        register_page.checarMensagemSucesso(name)
    })
})
