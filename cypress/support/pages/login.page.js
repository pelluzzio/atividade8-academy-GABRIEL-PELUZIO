import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();

export default class Login {
    linkRegistre_se = '[href="/register"]';
    inputNome = ':nth-child(1) > .profile-input';
    inputEmail = ':nth-child(2) > .profile-input';
    inputSenha = ':nth-child(3) > .profile-input';
    inputConfirmarSenha = ':nth-child(4) > .profile-input';
    buttonCadastrar = '.account-save-button';
    inputNome100 = ':nth-child(1) > .profile-input';
    spanMsgErro = '.input-error';
    spanMsgErro1 = ':nth-child(4) > .input-error';
    divCaixa = '.modal-body';
    spanMsgErro2 = ':nth-child(2) > .input-error';
    linkLogin = '[href="/login"]';
    inputEmailLogin = ':nth-child(1) > input';
    inputSenhaLogin = '.login-form > :nth-child(2) > input';
    buttonlogin = '.login-button';
    linkPerfil = '[href="/profile"]';
    linkGerenciar = '[href="/account"]';
    inputTipo = ':nth-child(3) > .profile-input';
    buttonOk ='.modal-actions > button';
    linkLogout = '[href="/logout"]'



    getRegistro() {
        return cy.get(this.linkRegistre_se).should('be.visible').click();

    };
    getNome() {
        return cy.get(this.inputNome).should('be.visible').type('Zico');
    }
    getEmail() {
        return cy.get(this.inputEmail).should('be.visible').type(randomEmail);
    };
    getSenha() {
        return cy.get(this.inputSenha).should('be.visible').type('123456');
    }
    getConfirmar() {
        return cy.get(this.inputConfirmarSenha).should('be.visible').type('123456');
    }

    getCadastrar() {
        return cy.get(this.buttonCadastrar).should('be.visible').click();

    }
    getErro() {
        return cy.get(this.spanMsgErro).should('be.visible');
    }
    getErro1() {
        return cy.get(this.spanMsgErro).should('be.visible').should('have.text', 'Informe o e-mail');
    }
    getErro2() {
        return cy.get(this.spanMsgErro).should('be.visible').should('have.text', 'Informe a senha');
    }
    getCaixaMsgAutenticar() {
        return cy.get(this.divCaixa).should('be.visible').should('have.text', 'Falha ao autenticarUsuário ou senha inválidos.');
    }

    getLogin(){
        return cy.get(this.linkLogin).click();
    }
    getEmailLogin(){
        return cy.get(this.inputEmailLogin).type(randomEmail)
    }
    getSenhaLogin(){
        return cy.get(this.inputSenhaLogin).type('123456')
    }
    getLoginButao(){
        return cy.get(this.buttonlogin).click();
    }
    getPerfil(){
        return cy.get(this.linkPerfil).click();
    }

    getGerenciar(){
        return cy.get(this.linkGerenciar).click();
    }

    getOk(){
        return cy.get(this.buttonOk).click();
    }
    getLogout(){
        return cy.get(this.linkLogout).click();
    }
    getEmailInexistente(){
        return cy.get(this.inputEmailLogin).type('pelluz1o@gabr1el.com')
    }
    getCaixaMsgSucesso() {
        return cy.get(this.divCaixa).should('be.visible').should('have.text', 'SucessoCadastro realizado!');
    }
}