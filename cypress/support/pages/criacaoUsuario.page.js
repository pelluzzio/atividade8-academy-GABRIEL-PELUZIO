import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email();

export default class CriacaoUsuario {
    linkRegistre_se = '[href="/register"]';
    inputNome = ':nth-child(1) > .profile-input';
    inputEmail = ':nth-child(2) > .profile-input';
    inputSenha = ':nth-child(3) > .profile-input';
    inputConfirmarSenha = ':nth-child(4) > .profile-input';
    buttonCadastrar = '.account-save-button';
    inputNome100 = ':nth-child(1) > .profile-input';
    spanMsgErro = ':nth-child(3) > .input-error';
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
    getNome100() {
        return cy.get(this.inputNome100).should('be.visible').type('Isabel Cristina Leopoldina Augusta Micaela Gabriela Rafaela Gonzaga de Bragança e Bourbón Whisky Vini');
    }
    getSenha5() {
        return cy.get(this.inputSenha).should('be.visible').type('12345');
    }
    getConfirmar5() {
        return cy.get(this.inputConfirmarSenha).should('be.visible').type('12345');
    }
    getErro() {
        return cy.get(this.spanMsgErro).should('be.visible').should('have.text', 'A senha deve ter pelo menos 6 dígitos.');
    }
    getErro1() {
        return cy.get(this.spanMsgErro1).should('be.visible').should('have.text', 'A senha deve ter pelo menos 6 dígitos.');
    }
    getErro3() {
        return cy.get(this.spanMsgErro).should('be.visible').should('have.text', 'A senha deve ter no máximo 12 dígitos.');
    }
    getErro4() {
        return cy.get(this.spanMsgErro1).should('be.visible').should('have.text', 'A senha deve ter no máximo 12 dígitos.');
    }
    getErro5() {
        return cy.get(this.spanMsgErro1).should('be.visible').should('have.text', 'As senhas devem ser iguais.');
    }
    getErro6() {
        return cy.get(this.spanMsgErro1).should('be.visible').should('have.text', 'Informe a senha');
    }
    getSenha13() {
        return cy.get(this.inputSenha).should('be.visible').type('1234567891011');
    }
    getConfirmar13() {
        return cy.get(this.inputConfirmarSenha).should('be.visible').type('1234567891011');
    }
    getCaixaMsgSucesso() {
        return cy.get(this.divCaixa).should('be.visible').should('have.text', 'SucessoCadastro realizado!');
    }
    getCaixaMsgFalha() {
        return cy.get(this.divCaixa).should('be.visible').should('have.text', 'Falha no cadastro.Não foi possível cadastrar o usuário.');
    }
    getCaixaMsgErro() {
        return cy.get(this.divCaixa).should('be.visible').should('have.text', 'Falha no cadastro.E-mail já cadastrado. Utilize outro e-mail');
    }
    getEmail60() {
        return cy.get(this.inputEmail).should('be.visible')

    }
    getErro2() {
        return cy.get(this.spanMsgErro2).should('be.visible').should('have.text', 'Informe o e-mail');
    }
    getConfirmar7() {
        return cy.get(this.inputConfirmarSenha).should('be.visible').type('1234567');
    }
    getEmail61() {
        return cy.get(this.inputEmail).should('be.visible').type('IsabelCristinaLeopoldinaAugustaMicaelaGabrielaViniF@gmail.com')
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

    getTipo(){
        return cy.get(this.inputTipo).should('have.value', '0')
    }
    getTipos(){
        return cy.get(this.inputTipo).invoke('text').then((text1) =>{
            expect(text1).to.eq('ComumAdministradorCrítico(a)')
        })
    }

}